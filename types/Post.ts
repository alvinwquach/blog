import { PortableTextBlock } from "sanity";

export interface Post {
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  categories: string[];
  publishedAt: Date;
  bodyRaw: PortableTextBlock;
}
