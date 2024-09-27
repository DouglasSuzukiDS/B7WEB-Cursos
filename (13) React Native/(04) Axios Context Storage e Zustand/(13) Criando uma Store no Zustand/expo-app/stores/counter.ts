import { create } from "zustand"

type CounterStore = {
   count: number
   increaseCount: () => void
   decreaseCount: () => void
}

export const useCounter = create<CounterStore>((set) => ({
   count: 0,
   increaseCount: () => set(state => ({ count: state.count + 1 })),
   decreaseCount: () => set(state => ({ count: state.count - 1 })),
 
}))