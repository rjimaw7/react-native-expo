import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AccountState {
  firstName: string;
  gender: "male" | "female";
  childrenList: string[];
  email: string;
  password: string;
  hasAccount: boolean;

  setFirstName: (firstName: string) => void;
  setGender: (gender: "male" | "female") => void;
  setChildrenList: (childrenList: string[]) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setHasAccount: (hasAccount: boolean) => void;

  clearFields: () => void;
}

const useAccountStore = create<AccountState>()(
  persist(
    (set) => ({
      firstName: "",
      gender: "male",
      childrenList: [],
      email: "",
      password: "",
      hasAccount: false,

      setFirstName: (firstName: string) => set({ firstName }),
      setGender: (gender: "male" | "female") => set({ gender }),
      setChildrenList: (childrenList: string[]) => set({ childrenList }),
      setEmail: (email: string) => set({ email }),
      setPassword: (password: string) => set({ password }),
      setHasAccount: (hasAccount: boolean) => set({ hasAccount }),

      clearFields: () =>
        set({
          firstName: "",
          gender: "male",
          childrenList: [],
          email: "",
          password: "",
          hasAccount: false,
        }),
    }),
    {
      name: "account-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAccountStore;
