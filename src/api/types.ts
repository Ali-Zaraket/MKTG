type SanityBlock = {
  _key: string;
  _type: "block";
  children: {
    _key: string;
    _type: string;
    marks: [];
    text: string;
  }[];
  markDefs: [];
  style: string;
};

type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type SanityResponse<T> = {
  query: string;
  result: T;
  syncTags: string[];
  ms: number;
};

export type Blog = {
  _id: string;
  content: SanityBlock[];
  image: SanityImage;
  releaseDate: string;
  smallDescription: string;
  title: string;
};
