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
  ] = input.split(", ");

  return {
    id: String(id).replace(/'/g, ""),
    name: String(name).replace(/'/g, ""),
    birthYear: String(birthYear).replace(/'/g, ""),
    company: parseInt(company),
    sex: parseInt(sex),
    member: parseInt(member),
    imageSRC: imageSRC !== "''" ? String(imageSRC).replace(/'/g, "") : "", //imageSRC : undefined,
    homePageURL:
      homePageURL !== "''" ? String(homePageURL).replace(/'/g, "") : "", //homePageURL : undefined,
    manzai: manzai !== "''" ? parseInt(manzai) : undefined,
    conte: conte !== "''" ? parseInt(conte) : undefined,
    pin: pin !== "''" ? parseInt(pin) : undefined,
    rhythm: rhythm !== "''" ? parseInt(rhythm) : undefined,
    gag: gag !== "''" ? parseInt(gag) : undefined,
    ogiri: ogiri !== "''" ? parseInt(ogiri) : undefined,
    mimic: mimic !== "''" ? parseInt(mimic) : undefined,
    talk: talk !== "''" ? parseInt(talk) : undefined,
    sns: sns !== "''" ? parseInt(sns) : undefined,
    appearance: parseInt(appearance),
    popularity: parseInt(popularity),
    info: String(info).replace(/'/g, ""),
  };
};

function convertToComedian(s: string): Comedian[] {
  const s_: string = s.substr(2, s.length - 4);
  const tupleArray: any[] = s_.split("), ("); //string[]
  const comedianData: Comedian[] = tupleArray.map(parseComedian);

  return comedianData;
}


export const getComedianNamePredict = async (
  name: string
):Promise<Comedian[] | null> => {
  const apiUrl = "https://yomo93-tendonrecommend-pub.hf.space/--replicas/47z5n/";
  const app = await client(apiUrl, {});
  const result = await app.predict("/predict", [name]);

  try {
    // アプリに予測リクエストを行います
    const result = await app.predict("/predict", [name]);

    // 結果が有効かどうかを確認します
    if (result !== null && typeof result === "object" && "data" in result) {
      const data: ResultData = result as ResultData;

      // 少なくとも1つのデータ項目があるかどうかを確認します
      if (data.data.length > 0) {
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
  const apiUrl = "https://yomo93-tendon-search.hf.space/";

  // アプリクライアントを初期化します
  const app = await client(apiUrl, {});

  try {
    // アプリに予測リクエストを行います
    const result = await app.predict("/predict", [name, comedyType]);

    // 結果が有効かどうかを確認します
    if (result !== null && typeof result === "object" && "data" in result) {
      const data: ResultData = result as ResultData;

      // 少なくとも1つのデータ項目があるかどうかを確認します
      if (data.data.length > 0) {
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
  const apiUrl = "https://yomo93-getcomediansdata-pub.hf.space/";

  // アプリクライアントを初期化します
  const app = await client(apiUrl, {});

  try {
    // アプリに予測リクエストを行います
    const result = await app.predict("/predict", [id, comedyType]);

    // 結果が有効かどうかを確認します
    if (result !== null && typeof result === "object" && "data" in result) {
      const data: ResultData = result as ResultData;

      // 少なくとも1つのデータ項目があるかどうかを確認します
      if (data.data.length > 0) {
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
