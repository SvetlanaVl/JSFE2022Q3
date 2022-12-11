export type urlParts = {
  endpoint: string;
  options?: {
    sources?: string;
    apiKey?: string;
  };
};

export type callback<T> = (data: T) => void;

export interface ISources {
  id: string;
  name: string;
  
}
export interface INews {
  source: ISources;
  urlToImage: string;
  content: string;
  author: string;
  publishedAt: string;
  title: string;
  description: string;
  url: string;
}

export interface sourceResponse {
  status: string;
  sources: ISources[];
}

export interface newsResponse {
  status: string;
  articles: INews[];
}