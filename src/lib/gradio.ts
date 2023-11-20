import { client } from "@gradio/client";
import { Comedian, dummyData } from "@/models/Comedian";

type ResultData = {
  data: Array<string>;
};

const parseComedian = (input: string): Comedian => {

  const [id, name, kanaName, birthYear, company, homePageURL, sex, , imageSRC, , member, manzai, conte, pin, rhythm, gag, ogiri, mimic, talk, sns, appearance, popularity, info] = input.split(', ');

  return {
    id: String(id).replace(/'/g, ""),
    name: String(name).replace(/'/g, ""),
    birthYear: String(birthYear).replace(/'/g, ""),
    company: parseInt(company),
    sex: parseInt(sex),
    member: parseInt(member),
    imageSRC: imageSRC !== "''" ? String(imageSRC).replace(/'/g, "") : "", //imageSRC : undefined,
    homePageURL: homePageURL !== "''" ? String(homePageURL).replace(/'/g, "") : "", //homePageURL : undefined,
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
}

function convertToComedian(s: string): Comedian[] {
  const s_: string = s.substr(2, s.length - 4);
  const tupleArray: any[] = s_.split('), ('); //string[]
  const comedianData: Comedian[] = tupleArray.map(parseComedian);
  //console.log(comedianData);

  return comedianData;
}

export const getComedianNamePredict = async (
  name: string
): Promise<string | null> => {
  const apiUrl = "https://yomo93-tendon-recommend-698e5c7.hf.space/";
  const app = await client(apiUrl, {});
  const result = await app.predict("/predict", [name]);

  if (result !== null && typeof result === "object" && "data" in result) {
    const data: ResultData = result as ResultData;
    if (data.data.length > 0) {
      return data.data[0];
    }
  } else {
    console.error("Error: Invalid data format");
  }
  console.error("Error: Invalid data format");
  return null;
};

export const getComedianDataForSearch = async (
  name: string,
  comedy_type: string[]
): Promise<Comedian[] | null> => {
  const apiUrl = "https://yomo93-tendon-search.hf.space/";
  const app = await client(apiUrl, {});
  const result = await app.predict("/predict", [name, comedy_type]);

  if (result !== null && typeof result === "object" && "data" in result) {
    const data: ResultData = result as ResultData;
    if (data.data.length > 0) {
      return convertToComedian(data.data[0]);
    }
  } else {
    console.error("Error: Invalid data format");
  }
  console.error("Error: Invalid data format");
  return null;
};
