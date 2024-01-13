import { axios } from "@libs/axios";

import {
  GetUserRequestParams,
  GetUserResponse,
  GetUserWithQueryRequestParams,
  GetUserWithQueryResponse,
} from "../types";

/**
 * ユーザー情報を取得する
 */
export const getUser = ({ id }: GetUserRequestParams): Promise<GetUserResponse> => {
  return axios.get(`/users/${id}`);
};

/**
 * クエリでユーザー情報を取得する
 */
export const getUserWithQuery = (
  params: GetUserWithQueryRequestParams,
): Promise<GetUserWithQueryResponse> => {
  return axios.get("/users", { params });
};
