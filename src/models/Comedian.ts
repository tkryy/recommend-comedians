
export type Comedian = {
  //基本属性
  id: string;
  imageSRC?: string;
  name: string;
  sex: number;
  info: string;
  company: string;
  birthYear: string;

  //芸風に関する数値
  //値がない場合も考慮する
  manzai?: boolean;
  conte?: boolean;
  alone?: boolean;
  rhythm?: boolean;
  ogiri?: boolean;
  mimic?: boolean;
  talk?: boolean;


  //見た目や人気など
  appearance: number;
  popularity: number;
};
