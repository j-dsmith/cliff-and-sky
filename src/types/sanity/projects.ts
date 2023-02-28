import { createImageSrc } from "@/lib/sanity";
import { z } from "zod";

export const projectsValidator = z.array(
  z.object({
    _id: z.string(),
    title: z.string(),
    category: z.string(),
    description: z.string(),
    image: z
      .object({
        asset: z.object({
          url: z.string(),
          metadata: z.object({
            dimensions: z.object({
              aspectRatio: z.number(),
              height: z.number(),
              width: z.number(),
            }),
          }),
        }),
      })
      .transform((image) => ({
        url: createImageSrc(image).url(),
        dimensions: image.asset.metadata.dimensions,
      })),
  })
);

export type ProjectsType = z.infer<typeof projectsValidator>;
export type ProjectType = z.infer<typeof projectsValidator>[number];
