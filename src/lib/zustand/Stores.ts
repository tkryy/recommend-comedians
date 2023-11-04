
import { Comedian } from "@/models/Comedian";
import { UserData } from "@/models/UserData";
import { create } from "zustand";

export interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export interface ComediansState {
  comedians: Comedian[];
  increase: () => void;
}

export interface UserDataState {
  userData: UserData;
  increase: () => void;
}



export const useComediansStore = create<ComediansState>((set) => ({
  comedians: [],
  increase: () => set((state) => ({ comedians: [...state.comedians, ...state.comedians] }))
}))

export const useUserDataStore = create<UserDataState>((set) => ({
  userData: {
    uid: "",
    email: "",
    name: ""
  },
  increase: () => set((state) => ({ userData: { ...state.userData, ...state.userData } }))
}))