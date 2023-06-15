import { atom } from "recoil";
import { PfpImg } from "../../assets/images";

export interface UserStateAtomType {
  profile: string;
  nickName: string;
  joinDate: string;
  email: string;
}

export const UserStateAtom = atom<UserStateAtomType>({
  key: "userState",
  default: {
    profile: PfpImg,
    joinDate: "2023-04-28",
    nickName: "김대희",
    email: "",
  },
});
