import * as config from "./../../configurations/index"

export const GetCookieExpTime = () => {
  const { refresh_expire_jwt } = config.default()
  return new Date(Date.now() + +refresh_expire_jwt * 1000)
}
