import dayJs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayJs.extend(relativeTime);

export const dayjs = dayJs;
