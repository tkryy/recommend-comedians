export type Comedian = {
  //基本属性
  id: string;
  imageSRC?: string;
  homePageURL: string;
  name: string;
  sex: number;
  info: string;
  company: number;
  birthYear: string;

  //芸風に関する数値
  //値がない場合も考慮する
  manzai?: boolean;
  conte?: boolean;
  alone?: boolean;
  rhythm?: boolean;
  gag?: boolean;
  ogiri?: boolean;
  mimic?: boolean;
  talk?: boolean;
  sns?: boolean;

  //見た目や人気など
  appearance: number;
  popularity: number;
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
      // SMA - 暗い赤
      return "#8B0000";
    case 4:
      // タイタン - 暗い紫
      return "#800080";
    case 5:
      // グレープカンパニー - 暗い紺色
      return "#304D73";
    case 6:
      // マセキ芸能社 - 暗いピンク
      return "#C30F70";
    case 7:
      // プロダクション人力舎 - 暗い黒
      return "#000000";
    case 8:
      // ワタナベエンターテイメント - 暗い茶色
      return "#8B4513";
    case 9:
      // 太田プロ - 暗い金色
      return "#AC9001";
    case 10:
      // サンミュージックプロダクション - 暗いシアン
      return "#008B8B";
    case 11:
      // 浅井企画所属 - 暗いオリーブ
      return "#556B2F";
    default:
      // その他 - 暗い灰色
      return "#696969";
  }
};




export const dummyData: Comedian[] = [
  {
    id: "1",
    name: "ダミー芸人1",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ1です",
    company: 1,
    birthYear: "2000",
    manzai: true,
    appearance: 1,
    popularity: 1,
  },
  {
    id: "2",
    name: "ダミー芸人2",
    imageSRC: "https://via.placeholder.com/420x315",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ2です",
    company: 2,
    birthYear: "2000",
    manzai: true,
    conte: true,
    appearance: 2,
    popularity: 2,
  },
  {
    id: "3",
    name: "ダミー芸人3",
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ3です",
    company: 3,
    birthYear: "2000",
    manzai: true,
    conte: true,
    appearance: 3,
    popularity: 3,
  },
  {
    id: "4",
    name: "ダミー芸人4",
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ4です",
    company: 4,
    birthYear: "2000",
    manzai: true,
    conte: true,
    mimic: true,
    appearance: 4,
    popularity: 4,
  },
  {
    id: "5",
    name: "ダミー芸人5",
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ5です",
    company: 5,
    birthYear: "2000",
    manzai: true,
    conte: true,
    appearance: 5,
    popularity: 5,
  },
  {
    id: "6",
    name: "ダミー芸人6",
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ6です",
    company: 6,
    birthYear: "2000",
    manzai: true,
    conte: true,
    appearance: 6,
    popularity: 6,
  },
  {
    id: "7",
    name: "ダミー芸人7",
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ7です",
    company: 7,
    birthYear: "2000",
    manzai: true,
    conte: true,
    appearance: 7,
    popularity: 7,
  },
  {
    id: "8",
    name: "ダミー芸人8",
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ8です",
    company: 8,
    birthYear: "2000",
    manzai: true,
    conte: true,
    appearance: 8,
    popularity: 8,
  },
  {
    id: "9",
    name: "ダミー芸人9",
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ9です",
    company: 9,
    birthYear: "2000",
    manzai: true,
    conte: true,
    appearance: 9,
    popularity: 9,
  },
  {
    id: "10",
    name: "ダミー芸人10",
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ10です",
    company: 10,
    birthYear: "2000",
    manzai: true,
    conte: true,
    appearance: 10,
    popularity: 10,
  },
  {
    id: "11",
    name: "ダミー芸人11",
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ11です",
    company: 11,
    birthYear: "2000",
    manzai: true,
    conte: true,
    appearance: 11,
    popularity: 11,
  },
  {
    id: "12",
    name: "ダミー芸人12",
    imageSRC: "https://via.placeholder.com/340x240",
    homePageURL: "https://profile.yoshimoto.co.jp/talent/detail?id=134",
    sex: 1,
    info: "これはダミーデータ12です",
    company: 12,
    birthYear: "2000",
    manzai: true,
    conte: true,
    appearance: 12,
    popularity: 12,
  },
];

