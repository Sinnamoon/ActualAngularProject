export interface ArticleAPIResponse {
  response: Response;
}

export interface Response {
  status: string;
  userTier: string;
  total: number;
  content: Article;
}

export interface Article {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  blocks: Blocks;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

export interface Blocks {
  main: Main;
  body: Body[];
  totalBodyBlocks: number;
}

export interface Main {
  id: string;
  bodyHtml: string;
  bodyTextSummary: string;
  attributes: Attributes;
  published: boolean;
  createdDate: string;
  firstPublishedDate: string;
  publishedDate: string;
  lastModifiedDate: string;
  contributors: any[];
  elements: Element[];
}

export interface Attributes {}

export interface Element {
  type: string;
  assets: any[];
  contentAtomTypeData: ContentAtomTypeData;
}

export interface ContentAtomTypeData {
  atomId: string;
  atomType: string;
}

export interface Body {
  id: string;
  bodyHtml: string;
  bodyTextSummary: string;
  attributes: Attributes2;
  published: boolean;
  createdDate: string;
  firstPublishedDate: string;
  publishedDate: string;
  lastModifiedDate: string;
  contributors: string[];
  elements: Element2[];
  title?: string;
}

export interface Attributes2 {
  pinned: boolean;
  keyEvent?: boolean;
  title?: string;
  summary?: boolean;
}

export interface Element2 {
  type: string;
  assets: Asset[];
  textTypeData?: TextTypeData;
  contentAtomTypeData?: ContentAtomTypeData2;
  imageTypeData?: ImageTypeData;
  richLinkTypeData?: RichLinkTypeData;
  tweetTypeData?: TweetTypeData;
}

export interface Asset {
  type: string;
  mimeType: string;
  file: string;
  typeData: TypeData;
}

export interface TypeData {
  width: number;
  height: number;
  isMaster?: boolean;
  aspectRatio?: string;
}

export interface TextTypeData {
  html: string;
}

export interface ContentAtomTypeData2 {
  atomId: string;
  atomType: string;
  isMandatory: boolean;
}

export interface ImageTypeData {
  caption: string;
  displayCredit: boolean;
  credit: string;
  source: string;
  photographer: string;
  alt: string;
  mediaId: string;
  mediaApiUri: string;
  suppliersReference: string;
  imageType: string;
}

export interface RichLinkTypeData {
  url: string;
  originalUrl: string;
  linkText: string;
  linkPrefix: string;
  role: string;
}

export interface TweetTypeData {
  source: string;
  url: string;
  id: string;
  html: string;
  originalUrl: string;
  isMandatory: boolean;
}
