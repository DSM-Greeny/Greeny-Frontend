import { atom } from "recoil";

export const UserAgentStateAtom = atom<string>({
  key: "userAgentState",
  default: "",
});
