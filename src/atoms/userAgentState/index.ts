import { atom } from "recoil";

export const UserAgentStateAtom = atom<"Android" | "iOS" | "">({
  key: "userAgentState",
  default: "",
});
