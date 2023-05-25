import { atom } from "recoil";
import { PlaceType } from "../../types/place";

export const PlaceStateAtom = atom<PlaceType[]>({
  key: "placeState",
  default: [],
});
