import { createImageSrc } from "@/lib/sanity";
import { z } from "zod";

export const projectsValidator = z.array(
  z.object({
    _id: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.object({
      asset: z.object({
        _ref: z.string(),

        asset: z.object({
          dimensions: z.object({
            aspectRatio: z.number(),
            height: z.number(),
            width: z.number(),
          }),
        }),
      }),
      // .transform((image) => {createImageSrc(image) })),
    }),
  })
);

export type ProjectsType = z.infer<typeof projectsValidator>;
export type ProjectType = z.infer<typeof projectsValidator>[number];
