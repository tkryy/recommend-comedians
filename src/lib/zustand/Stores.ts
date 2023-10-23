
import { Comedian } from "@/models/Comedian";
import { create } from "zustand";

export interface BearState {
  bears: number;
  increase: (by: number) => void;
}

export interface ComediansState {
  comedians: Comedian[];
  increase: () => void;
}

export const useComediansStore = create<ComediansState>((set) => ({
  comedians: [],
  increase: () => set((state) => ({ comedians: [...state.comedians, ...state.comedians] }))
}))