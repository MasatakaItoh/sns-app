import { paths } from "share";

/**
 * ユーザー情報を取得する
 */
type GetUserPath = paths["/api/users/{id}"]["get"];

export type GetUserRequestParams = GetUserPath["parameters"]["path"];

export type GetUserResponse = GetUserPath["responses"]["200"]["content"]["application/json"];

/**
 * クエリでユーザー情報を取得する
 */
type GetUserWithQueryPath = paths["/api/users/"]["get"];

export type GetUserWithQueryRequestParams = GetUserWithQueryPath["parameters"]["query"];

export type GetUserWithQueryResponse =
  GetUserWithQueryPath["responses"]["200"]["content"]["application/json"];
