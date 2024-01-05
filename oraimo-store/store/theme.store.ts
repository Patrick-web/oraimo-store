import { create } from "zustand";
import { persist } from "zustand/middleware";

const themeStore = create(
    persist(
        (set) => ({
            theme: "light",
            setTheme: (theme: string) => set({ theme }),
        }),
        {
            name: "theme-storage",
        }
    )
);

export default themeStore;