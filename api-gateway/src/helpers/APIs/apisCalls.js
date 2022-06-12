import got from "got";

export const apiPostCall = ({url,params,headers,body}) => {
    return await got.post(
        url,{json: {body}}
    ).json();
}

export const apiGetCall = ({url,params,headers}) => {
    return await got.get(
        url
    ).json();
}


