import { client } from "@gradio/client";

type ResultData = {
  data: Array<string>;
};

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
  type: string[]
): Promise<string | null> => {
  const apiUrl = "https://yomo93-tendon-search.hf.space/";
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
