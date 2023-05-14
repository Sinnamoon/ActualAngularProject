export interface SearchAPIResponse {
  response: Response;
}

export interface Response {
  status: string;
  userTier: string;
  total: number;
  results: Articles[];
}

export interface Articles {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  editions: Edition[];
}

export interface Edition {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  code: string;
}
