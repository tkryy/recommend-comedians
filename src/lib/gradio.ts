import { client } from "@gradio/client";
import { Comedian, dummyData } from "@/models/Comedian";

type ResultData = {
  data: Array<string>;
};

const parseComedian = (input: string): Comedian => {
  const [
    id,
    name,
    kanaName,
    birthYear,
    company,
    homePageURL,
    sex,
    ,
    imageSRC,
    ,
    member,
    manzai,
    conte,
    pin,
    rhythm,
    gag,
    ogiri,
    mimic,
    talk,
    sns,
    appearance,
    popularity,
    info,
    x1,
    insta1,
    x2,
    insta2,
    youtube_channel,
    others1,
    others2,
    movie_link,
    updated_at
  ] = input.split(", ");

  return {
    id: String(id).replace(/'/g, "").replace(/"/g,''),
    name: String(name).replace(/'/g, "").replace(/\s/g,"").replace(/"/g,''),
    birthYear: String(birthYear).replace(/'/g, "").replace(/\s/g,""),
    company: parseInt(company.replace(/'/g,"")),
    sex: parseInt(sex.replace(/'/g,"")),
    member: parseInt(member.replace(/'/g,"")),
    imageSRC: imageSRC !== "''" ? String(imageSRC).replace(/'/g, "").replace(/"/g, "") : "", //imageSRC : undefined,
    homePageURL:
      homePageURL !== "''" ? String(homePageURL).replace(/'/g, "") : "", //homePageURL : undefined,
    manzai: manzai !== "''" ? parseInt(manzai.replace(/'/g,"")) : undefined,
    conte: conte !== "''" ? parseInt(conte.replace(/'/g,"")) : undefined,
    pin: pin !== "''" ? parseInt(pin.replace(/'/g,"")) : undefined,
    rhythm: rhythm !== "''" ? parseInt(rhythm.replace(/'/g,"")) : undefined,
    gag: gag !== "''" ? parseInt(gag.replace(/'/g,"")) : undefined,
    ogiri: ogiri !== "''" ? parseInt(ogiri.replace(/'/g,"")) : undefined,
    mimic: mimic !== "''" ? parseInt(mimic.replace(/'/g,"")) : undefined,
    talk: talk !== "''" ? parseInt(talk.replace(/'/g,"")) : undefined,
    sns: sns !== "''" ? parseInt(sns.replace(/'/g,"")) : undefined,
    appearance: parseInt(appearance.replace(/'/g,"")),
    popularity: parseInt(popularity.replace(/'/g,"")),
    info: String(info).replace(/'/g, "").replace(/"/g, ""),
    x1: String(x1).replace(/'/g, "").replace(/"/g, ""),
    insta1: String(insta1).replace(/'/g, "").replace(/"/g, ""),
    x2: String(x2).replace(/'/g, "").replace(/"/g, ""),
    insta2: String(insta2).replace(/'/g, "").replace(/"/g, ""),
    youtube_channel: String(youtube_channel).replace(/'/g, "").replace(/"/g, ""),
    others1: String(others1).replace(/'/g, "").replace(/"/g, ""),
    others2: String(others2).replace(/'/g, "").replace(/"/g, ""),
    movie_link: String(movie_link).replace(/'/g, "").replace(/"/g, ""),
    updated_at: updated_at.replace(/'/g, "").replace(/"/g, ""),

  };
};

function convertToComedian(s: string): Comedian[] {
  const s_: string = s.substr(2, s.length - 4);
  const tupleArray: any[] = s_.split("], ["); //string[]
  const comedianData: Comedian[] = tupleArray.map(parseComedian);

  return comedianData;
}


export const getComedianNamePredict = async (
  name: string
):Promise<Comedian[] | null> => {
  //const apiUrl = "https://yomo93-tendon-recommend-698e5c7.hf.space/";
  const apiUrl = "https://yomo93-tendonrecommend-pub.hf.space/";
  const app = await client(apiUrl, {});
  const result = await app.predict("/predict", [name]);
  console.log(result)
  try {
    // アプリに予測リクエストを行います
    const result = await app.predict("/predict", [name]);

    // 結果が有効かどうかを確認します
    if (result !== null && typeof result === "object" && "data" in result) {
      const data: ResultData = result as ResultData;
      //console.log(data.data[0])
      // 少なくとも1つのデータ項目があるかどうかを確認します
      if (data.data.length > 0) {
        //console.log(convertToComedian(data.data[0]));
        // 最初のデータ項目をComedianオブジェクトに変換します
        return convertToComedian(data.data[0]);
      }
    }

    // データ形式が無効な場合はエラーをログに記録します
    console.error("Error: Invalid data format");
  } catch (error) {
    // 発生した他のエラーをログに記録します
    console.error("Error:", error);
  }
  console.error("Error: Invalid data format");
  return null;
};

/**
 * 与えられた検索クエリに対してコメディアンのデータを取得します。
 * @param name - 検索するコメディアンの名前。
 * @param comedyType - 検索結果をフィルタリングするためのコメディタイプの配列。
 * @returns 成功した場合はComedianオブジェクトの配列を解決するPromise、それ以外の場合はnull。
 */
export const getComedianDataForSearch = async (
  name: string,
  comedyType: string[]
): Promise<Comedian[] | null> => {
  // APIのURLを定義します
  const apiUrl = "https://yomo93-tendonsearch-pub.hf.space/";

  // アプリクライアントを初期化します
  const app = await client(apiUrl, {});

  try {
    // アプリに予測リクエストを行います
    const result = await app.predict("/predict", [name, comedyType]);

    // 結果が有効かどうかを確認します
    if (result !== null && typeof result === "object" && "data" in result) {
      const data: ResultData = result as ResultData;
      //console.log( data.data[0].replace(/"/g, '').replace(/' /g, "'"))
      //console.log(convertToComedian(data.data[0].replace(/"/g, '')))
      // 少なくとも1つのデータ項目があるかどうかを確認します
      if (data.data.length > 0) {
        //console.log(data.data[0])
        //console.log(convertToComedian(data.data[0]));
        // 最初のデータ項目をComedianオブジェクトに変換します
        return convertToComedian(data.data[0]);
      }
    }

    // データ形式が無効な場合はエラーをログに記録します
    console.error("Error: Invalid data format");
  } catch (error) {
    // 発生した他のエラーをログに記録します
    console.error("Error:", error);
  }

  // エラーが発生したか、データが見つからなかった場合はnullを返します
  return null;
};

/**
 * 与えられた検索クエリに対してコメディアンのデータを取得します。
 * @param id - 検索するコメディアンのID。
 * @param comedyType - 検索結果をフィルタリングするためのコメディタイプの配列。
 * @returns 成功した場合はComedianオブジェクトの配列を解決するPromise、それ以外の場合はnull。
 */
export const getComedianDataFromID = async (
  id: string,
  comedyType: string[]
): Promise<Comedian[] | null> => {
  // APIのURLを定義します
  //const apiUrl = "https://yomo93-getcomediansdata-pub.hf.space/";
  const apiUrl = "https://yomo93-tendon-searchid-pub.hf.space/";

  // アプリクライアントを初期化します
  const app = await client(apiUrl, {});

  try {
    // アプリに予測リクエストを行います
    const result = await app.predict("/predict", [id]);//, comedyType]);

    // 結果が有効かどうかを確認します
    if (result !== null && typeof result === "object" && "data" in result) {
      const data: ResultData = result as ResultData;
      //console.log(data.data[0])
      // 少なくとも1つのデータ項目があるかどうかを確認します
      if (data.data.length > 0) {
        //console.log(data.data[0]);
        //console.log(convertToComedian(data.data[0]));
        // 最初のデータ項目をComedianオブジェクトに変換します
        return convertToComedian(data.data[0]);
      }
    }

    // データ形式が無効な場合はエラーをログに記録します
    console.error("Error: Invalid data format");
  } catch (error) {
    // 発生した他のエラーをログに記録します
    console.log("エラーが出てるよ");
    console.error("Error:", error);
  }

  // エラーが発生したか、データが見つからなかった場合はnullを返します
  return null;
};

export const URLtoImage = async (
  cURL: string
):Promise<string | null> => {
  const apiUrl = "https://yomo93-url2image-pub.hf.space/";
  const app = await client(apiUrl, {});
  
  try {
    // アプリに予測リクエストを行います
    const result = await app.predict("/predict", [cURL]);

    // 結果が有効かどうかを確認します
    if (result !== null && typeof result === "object" && "data" in result) {
      const data: ResultData = result as ResultData;
      //console.log(data.data[0])
      // 少なくとも1つのデータ項目があるかどうかを確認します
      if (data.data.length > 0) {
        
        console.log(data.data[0])
        // 最初のデータ項目をComedianオブジェクトに変換します
        return data.data[0];
      }
    }

    // データ形式が無効な場合はエラーをログに記録します
    console.error("Error: Invalid data format");
  } catch (error) {
    // 発生した他のエラーをログに記録します
    console.error("Error:", error);
  }
  console.error("Error: Invalid data format");
  return null;
};