import type { ReactNode } from "react";

export interface GlobalProviderProps {
  children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  return <>{children}</>;
}
