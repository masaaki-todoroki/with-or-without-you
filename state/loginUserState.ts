import { atom } from "recoil";

export const loginUserState = atom<string | null>({
  key: "loginUserState",
  default: null
});
