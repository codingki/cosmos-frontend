import { createTrackedSelector } from "react-tracked";
import type { State } from "zustand";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export interface GlobalStore extends State {
  isConnected: boolean;
}

export const useGlobalStore = create<GlobalStore>(
  subscribeWithSelector((_set, _get) => ({
    isConnected: false,
  })),
);

export const useGlobal = createTrackedSelector(useGlobalStore);
