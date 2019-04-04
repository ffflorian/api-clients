export interface ImageData {
  data: Buffer;
  mimeType?: string;
}

export interface RequestOptions {
  withData?: boolean;
}

export interface ClientOptions {
  apiUrl?: string;
}

export interface XKCDResult {
  alt: string;
  day: string;
  img: string;
  link: string;
  month: string;
  news: string;
  num: number;
  safe_title: string;
  title: string;
  transcript: string;
  year: string;
}

export interface XKCDResultWithData extends XKCDResult {
  data: ImageData;
}
