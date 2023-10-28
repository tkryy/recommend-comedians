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
  manzai?: boolean;
  conte?: boolean;
  pin?: boolean;
  rhythm?: boolean;
  gag?: boolean;
  ogiri?: boolean;
  mimic?: boolean;
  talk?: boolean;
  sns?: boolean;

  //見た目や人気など
  appearance: number;
  popularity: number;

  info: string;
};

export const convertComedianCompanyToString = (comedian: Comedian) => {
  let number = comedian.company;
  switch (number) {
    case 0:
      return "東京(札幌)吉本";
    case 1:
      return "大阪(福岡、沖縄)吉本";
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
      return "浅井企画所属";
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
    id: uuidv4(),
    name: "ダミー芸人1",
    birthYear: "2000",
    company: 1,
    sex: 1,
    member: 2,
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ1です",
    manzai: true,
    appearance: 1,
    popularity: 1,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人2",
    birthYear: "2000",
    company: 2,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/420x315",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ2です",
    manzai: true,
    conte: true,
    appearance: 2,
    popularity: 2,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人3",
    birthYear: "2000",
    company: 3,
    sex: 1,
    member: 3,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ3です",
    manzai: true,
    conte: true,
    appearance: 3,
    popularity: 3,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人4",
    birthYear: "2000",
    company: 4,
    sex: 1,
    member: 1,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ4です",
    manzai: true,
    conte: true,
    mimic: true,
    appearance: 4,
    popularity: 4,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人5",
    birthYear: "2000",
    company: 5,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ5です",
    manzai: true,
    conte: true,
    appearance: 5,
    popularity: 5,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人6",
    birthYear: "2000",
    company: 6,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ6です",
    manzai: true,
    conte: true,
    appearance: 6,
    popularity: 6,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人7",
    birthYear: "2000",
    company: 7,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ7です",
    manzai: true,
    conte: true,
    appearance: 7,
    popularity: 7,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人8",
    birthYear: "2000",
    company: 8,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ8です",
    manzai: true,
    conte: true,
    appearance: 8,
    popularity: 8,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人9",
    birthYear: "2000",
    company: 9,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ9です",
    manzai: true,
    conte: true,
    appearance: 9,
    popularity: 9,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人10",
    birthYear: "2000",
    company: 10,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ10です",
    manzai: true,
    conte: true,
    appearance: 10,
    popularity: 10,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人11",
    birthYear: "2000",
    company: 11,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ11です",
    manzai: true,
    conte: true,
    appearance: 11,
    popularity: 11,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人12",
    birthYear: "2000",
    company: 12,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ12です",
    manzai: true,
    conte: true,
    appearance: 12,
    popularity: 12,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人13",
    birthYear: "2000",
    company: 13,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ13です",
    manzai: true,
    conte: true,
    appearance: 13,
    popularity: 13,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人14",
    birthYear: "2000",
    company: 14,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ14です",
    manzai: true,
    conte: true,
    appearance: 14,
    popularity: 14,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人15",
    birthYear: "2000",
    company: 15,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ15です",
    manzai: true,
    conte: true,
    appearance: 15,
    popularity: 15,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人16",
    birthYear: "2000",
    company: 16,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ16です",
    manzai: true,
    conte: true,
    appearance: 16,
    popularity: 16,
  },
  {
    id: uuidv4(),
    name: "ダミー芸人17",
    birthYear: "2000",
    company: 17,
    sex: 1,
    member: 2,
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    info: "これはダミーデータ17です",
    manzai: true,
    conte: true,
    appearance: 17,
    popularity: 17,
  },
];
