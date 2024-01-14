import { v4 as uuidv4 } from "uuid";

export type Comedian = {
  //基本属性
  id: string;
  name: string;
  birthYear: string;
  company: number;
  sex: number;
  member: number;
  imageSRC?: string;
  homePageURL?: string;

  //芸風に関する数値
  //値がない場合も考慮する
  manzai?: number;
  conte?: number;
  pin?: number;
  rhythm?: number;
  gag?: number;
  ogiri?: number;
  mimic?: number;
  talk?: number;
  sns?: number;

  //見た目や人気など
  appearance: number;
  popularity: number;

  info: string;

  // SNS関係
  x1?: string,
  insta1?: string,
  x2?: string,
  insta2: string,
  youtube_channel?: string,
  others1?: string,
  others2?: string,
  movie_link?: string,

  updated_at: string

};

export const convertComedianCompanyToString = (comedian: Comedian) => {
  let number = comedian.company;
  switch (number) {
    case 0:
      return "東京吉本(東)";
    case 1:
      return "大阪吉本(西)";
    case 2:
      return "松竹";
    case 3:
      return "SMA";
    case 4:
      return "タイタン";
    case 5:
      return "グレープカンパニー";
    case 6:
      return "マセキ芸能社";
    case 7:
      return "プロダクション人力舎";
    case 8:
      return "ワタナベエンターテイメント";
    case 9:
      return "太田プロ";
    case 10:
      return "サンミュージックプロダクション";
    case 11:
      return "浅井企画";
    case 12:
      return "ケイダッシュステージ";
    case 13:
      return "ホリプロコム";
    case 14:
      return "ASH&D";
    case 15:
      return "ビクターミュージックアーツ";
    case 16:
      return "フリー";
    default:
      return "その他";
  }
};

export const convertComedianCompanyToColor = (comedian: Comedian) => {
  let number = comedian.company;
  switch (number) {
    case 0:
      // 東京(札幌)吉本 - 暗い青
      return "#00008B";
    case 1:
      // 大阪(福岡、沖縄)吉本 - 暗いオレンジ
      return "#FF8C00";
    case 2:
      // 松竹 - 暗い緑
      return "#006400";
    case 3:
      // SMA - 黄色系
      return "#BFB889";
    case 4:
      // タイタン - 暗い紫
      return "#304D73";
    case 5:
      // グレープカンパニー - 暗い紺色
      return "#800080";
    case 6:
      // マセキ芸能社 - 暗いピンク
      return "#C30F70";
    case 7:
      // プロダクション人力舎 - 暗い黒
      return "#6AA9C7";
    case 8:
      // ワタナベエンターテイメント - 暗い茶色
      return "#8B4513";
    case 9:
      // 太田プロ - 青系
      return "#5185C5";
    case 10:
      // サンミュージックプロダクション - ピンク系
      return "#DE6B7A";
    case 11:
      // 浅井企画所属 - 暗いオリーブ　> 青系に変更
      return "#535CA8";
    case 12:
      // ケイダッシュステージ - 赤系
      return "#E56C3E";
    case 13:
      // ホリプロコム - 濃い青
      return "#556B2F";
    case 14:
      // ASH&D - オレンジ系
      return "#E09C41";
    case 15:
      // ビクターミュージック - 紫系
      return "#684870";
    case 16:
      // フリー - ハイイロ？
      return "#949495";
    default:
      // その他 - 暗い灰色
      return "#4B4948";
  }
};

export const dummyData: Comedian[] = [
  {
    id: "YSN1111111", //"99410c8c-8c17-4c8f-9521-90b594aefaac",
    name: "ダミー芸人1",
    birthYear: "2000",
    company: 0,
    sex: 1,
    member: 2,
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ1です",
    manzai: 1,
    appearance: 1,
    popularity: 1,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2024/01/13',
  },
  {
    id: "YSN1111111", //"99410c8c-8c17-4c8f-9521-90b594aefaac",
    name: "ダミー芸人1",
    birthYear: "2000",
    company: 1,
    sex: 1,
    member: 2,
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ1です",
    manzai: 1,
    appearance: 1,
    popularity: 1,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "SHT0000000", //"a9df3c77-0671-487c-ba3d-310a58e094d0",
    name: "ダミー芸人2",
    birthYear: "2000",
    company: 2,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/420x315",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ2です",
    manzai: 1,
    conte: 1,
    appearance: 2,
    popularity: 2,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "SMT2222222",//uuidv4(),
    name: "ダミー芸人3",
    birthYear: "2000",
    company: 3,
    sex: 1,
    member: 3,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ3です",
    manzai: 1,
    conte: 1,
    appearance: 3,
    popularity: 3,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "TIT3333333",//uuidv4(),
    name: "ダミー芸人4",
    birthYear: "2000",
    company: 4,
    sex: 1,
    member: 1,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ4です",
    manzai: 1,
    conte: 1,
    mimic: 1,
    appearance: 4,
    popularity: 4,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "GCT4444444",//uuidv4(),
    name: "ダミー芸人5",
    birthYear: "2000",
    company: 5,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ5です",
    manzai: 1,
    conte: 1,
    appearance: 5,
    popularity: 5,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "MET5555555",//uuidv4(),
    name: "ダミー芸人6",
    birthYear: "2000",
    company: 6,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ6です",
    manzai: 1,
    conte: 1,
    appearance: 6,
    popularity: 6,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "PJT1111111",//uuidv4(),
    name: "ダミー芸人7",
    birthYear: "2000",
    company: 7,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ7です",
    manzai: 1,
    conte: 1,
    appearance: 7,
    popularity: 7,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "WET1111111",//uuidv4(),
    name: "ダミー芸人8",
    birthYear: "2000",
    company: 8,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ8です",
    manzai: 1,
    conte: 1,
    appearance: 8,
    popularity: 8,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "HPT1111111",//uuidv4(),
    name: "ダミー芸人9",
    birthYear: "2000",
    company: 9,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ9です",
    manzai: 1,
    conte: 1,
    appearance: 9,
    popularity: 9,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "SPT1111111",//uuidv4(),
    name: "ダミー芸人10",
    birthYear: "2000",
    company: 10,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ10です",
    manzai: 1,
    conte: 1,
    appearance: 10,
    popularity: 10,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "APT1111111",//uuidv4(),
    name: "ダミー芸人11",
    birthYear: "2000",
    company: 11,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ11です",
    manzai: 1,
    conte: 1,
    appearance: 11,
    popularity: 11,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "KDT1111111",//uuidv4(),
    name: "ダミー芸人12",
    birthYear: "2000",
    company: 12,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ12です",
    manzai: 1,
    conte: 1,
    appearance: 12,
    popularity: 12,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "HRT1111111",//uuidv4(),
    name: "ダミー芸人13",
    birthYear: "2000",
    company: 13,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ13です",
    manzai: 1,
    conte: 1,
    appearance: 13,
    popularity: 13,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "AST1111111",//uuidv4(),
    name: "ダミー芸人14",
    birthYear: "2000",
    company: 14,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ14です",
    manzai: 1,
    conte: 1,
    appearance: 14,
    popularity: 14,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "VMT1111111",//uuidv4(),
    name: "ダミー芸人15",
    birthYear: "2000",
    company: 15,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ15です",
    manzai: 1,
    conte: 1,
    appearance: 15,
    popularity: 15,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "FRT1111111", //uuidv4(),
    name: "ダミー芸人16",
    birthYear: "2000",
    company: 16,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ16です",
    manzai: 1,
    conte: 1,
    appearance: 16,
    popularity: 16,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
  {
    id: "XXX1111111", //uuidv4(),
    name: "ダミー芸人17",
    birthYear: "2000",
    company: 17,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ17です",
    manzai: 1,
    conte: 1,
    appearance: 17,
    popularity: 17,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/09',
  },
];

export const error_comedian:Comedian = {
    id: "XXXXXXXXXX", //uuidv4(),
    name: "エラー",
    birthYear: "2000",
    company: 17,
    sex: 0,
    member: 0,
    imageSRC: "no_link",
    homePageURL: "no_link",
    info: "入力が間違っていないか確認してください。",
    manzai: 0,
    conte: 0,
    appearance: 0,
    popularity: 0,
    x1: 'no_link',
    insta1: 'no_link',
    x2: 'no_link',
    insta2: 'no_link',
    youtube_channel: 'no_link',
    others1: 'no_link',
    others2: 'no_link',
    movie_link: 'no_link',
    updated_at: '2023/12/23',
};

export const sample:Comedian = {
  id: "XXXXXXXXXX",
  name: "サンプル",
  birthYear: "2000",
  company: 0,
  sex: 0,
  member: 0,
  imageSRC: "no_link",
  homePageURL: "no_link",
  info: "これはサンプルデータです",
  manzai: 1,
  conte: 1,
  pin: 1,
  rhythm: 1,
  ogiri: 1,
  mimic: 1,
  gag: 1,
  talk: 1,
  sns: 1,
  appearance: 0,
  popularity: 0,
  x1: 'no_link',
  insta1: 'no_link',
  x2: 'no_link',
  insta2: 'no_link',
  youtube_channel: 'no_link',
  others1: 'no_link',
  others2: 'no_link',
  movie_link: 'no_link',
  updated_at: '2024/01/13',
};

