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
  title: string;
  subtitle: string;
  desc: string;
  timeImg: string;
  timeContent: string;
}

export interface Squares {
  title: string;
}

export interface Social {
  link: string;
  img: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface PhotosState {
  readonly list: string[];
}
