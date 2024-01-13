import { paths } from "share";

/**
 * プロフィールのタイムラインの投稿を取得する
 */
type GetProfileTimelinePath = paths["/api/posts/profile/timeline/{userName}"]["get"];

export type GetProfileTimelineRequestParams = GetProfileTimelinePath["parameters"]["path"];

export type GetProfileTimelineResponse =
  GetProfileTimelinePath["responses"]["200"]["content"]["application/json"];

/**
 * タイムラインの投稿を取得する
 */
type GetTimelinePath = paths["/api/posts/timeline/{userId}"]["get"];

export type GetTimelineRequestParams = GetTimelinePath["parameters"]["path"];

export type GetTimelineResponse =
  GetTimelinePath["responses"]["200"]["content"]["application/json"];
