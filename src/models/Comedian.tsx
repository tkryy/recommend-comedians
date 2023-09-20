export type Comedian = {
  //基本属性
  id: string;
  name: string;
  sex: number;
  info: string;
  company: string;
  birthYear: string;

  //芸風に関する数値
  //値がない場合も考慮する
  manzai: boolean | undefined;
  conte: boolean | undefined;
  alone: boolean | undefined;
  rhythm: boolean | undefined;
  ogiri: boolean | undefined;
  mimic: boolean | undefined;
  talk: boolean | undefined;


  //見た目や人気など
  appearance: number;
  popularity: number;
};
