import { message } from "antd";
import axios, { AxiosResponse, HttpStatusCode } from "axios";

export enum EResponseCode {
  Ok = 0,
  ServerError = -1,
  NotLogIn = -2,
  NotAuthorized = -3,
}

enum EBaseUrl {
  Dev = "http://localhost:7001/api",
}

const request = axios.create({
  timeout: 5000,
  withCredentials: true,
  baseURL: EBaseUrl.Dev,
  headers: {
    Cookies: "",
  },
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
  },
);

request.interceptors.response.use(
  (response: AxiosResponse<any, any>): any => {
    return response.data.data;
  },
  (error) => {
    const response = error.response.data;
    message.error(response);
    switch (response.status) {
      case HttpStatusCode.Unauthorized:
        break;
      default:
        break;
    }
    return null;
  },
);

export { request };
