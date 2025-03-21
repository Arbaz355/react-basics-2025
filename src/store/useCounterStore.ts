import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCountStore = create()(
  persist(
    (set, get) => ({
      count: 0,
      setCount: (newValue: number) => set(() => ({ count: newValue })),
    }),
    {
      name: "counter-value",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// const useCountStore = create((set) => ({
//   //   incrementCount: () => set((state) => ({ count: state.count + 1 })),
//   //   decrementCount: () => set((state) => ({ count: state.count - 1 })),
//   //   resetCount: () => set((state) => ({ count: 0 })),
// }));

// // const [isMenuOpen, setIsMenuOpen] = useState(false)
// const useMenuStateStore = create((set) => ({
//   isMenuOpen: false,
//   setIsMenuOpen: (newValue: boolean) => set(() => ({ isMenuOpen: newValue })),
// }));

// const useNameStore = create((set) => ({
//   name: "",
//   setName: (newValue: string) => set(() => ({ name: newValue })),
// }));

// const useFormStore = create((set) => ({
//   formData: {
//     name: "",
//     age: 0,
//     role: "",
//   },
//   setFormData: (newObj: string) => set((state) => ({ formData: newObj })),
//   resetForm:
// }));

export { useCountStore, useMenuStateStore };
