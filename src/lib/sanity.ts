import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const myClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
});

export const createImageSrc = (image: SanityImageSource) => {
  const builder = imageUrlBuilder(myClient);
  // console.log(builder.image(image));

  return builder.image(image);
};
