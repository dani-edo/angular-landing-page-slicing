export interface WindowsType {
  title: string;
  all: string;
  contents: {
    title?: string;
    person?: string;
    views?: number;
    img?: string;
    upload?: UploadType;
  }[];
}

export interface UploadType {
  img: string;
  text: string;
}
