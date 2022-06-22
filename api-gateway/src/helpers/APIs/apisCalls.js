import got from "got";

export const apiPostCall = async ({ url, params, headers, body }) => {
  console.log("apiPostCall");
  return await got.post(url, { json: body }).json();
};

export const apiGetCall = async ({ url, params, headers }) => {
  return await got.get(url).json();
};
