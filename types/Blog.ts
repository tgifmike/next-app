import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  preview: PortableTextBlock[];
  content: PortableTextBlock[];
};
