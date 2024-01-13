export const getPath = {
  home: "/",
  login: "/login",
  register: "/register",
  passwordReset: "/password-reset",
  profile: (userName: string) => `/profile/${userName}`,
};
