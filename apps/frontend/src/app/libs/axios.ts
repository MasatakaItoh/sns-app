import Axios, { type AxiosError } from "axios";

export const axios = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
});

axios.interceptors.response.use(
  (res) => res.data,
  (err: AxiosError) => {
    return Promise.reject(err);
  },
);
