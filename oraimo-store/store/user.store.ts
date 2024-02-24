import { UserType } from "@/types/account.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
    token: string | null;
    setToken: (token: string | null) => void;
    recaptchaToken: string | null;
    setRecaptchaToken: (token: string | null) => void;
    user: UserType | null;
    setUser: (user: UserType | null) => void;
}


const userStore = create(
    persist<UserStore>(
        (set) => ({
            token: null,
            setToken: (token) => set({ token }),
            recaptchaToken: null,
            setRecaptchaToken: (token) => set({ recaptchaToken: token }),
            user: null,
            setUser: (user) => set({ user }),
        }),
        {
            name: "user-store",
        }
    )
);

export default userStore;