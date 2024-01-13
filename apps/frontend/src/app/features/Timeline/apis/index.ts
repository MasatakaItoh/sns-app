import { axios } from "@libs/axios";

import {
  GetProfileTimelineRequestParams,
  GetProfileTimelineResponse,
  GetTimelineRequestParams,
  GetTimelineResponse,
} from "../types";

/**
 * プロフィールのタイムラインの投稿を取得する
 */
export const getProfileTimeline = ({
  userName,
}: GetProfileTimelineRequestParams): Promise<GetProfileTimelineResponse> => {
  return axios.get(`/posts/profile/timeline/${userName}`);
};

/**
 * タイムラインの投稿を取得する
 */
export const getTimeline = ({ userId }: GetTimelineRequestParams): Promise<GetTimelineResponse> => {
  return axios.get(`/posts/timeline/${userId}`);
};
