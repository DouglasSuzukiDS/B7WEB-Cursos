import { createContext } from "react";

export const CounountInitialData = 150

type CountContextType = {
   onlineCount: number
   setOnlineCount: (n: number) => void
}

export const CountContext = createContext<CountContextType | null>(null)