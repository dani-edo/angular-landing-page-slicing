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

export interface Timeline {
  img: string;
  title: string;
  subtitle: string;
  desc: string;
  timeImg: string;
  timeContent: string;
}
