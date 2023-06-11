import { axios } from "@/libs";

export const getTimeline = ({ userId }) => {
  return axios.get(`/timeline/${userId}`);
};
