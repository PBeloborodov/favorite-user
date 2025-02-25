import { create } from "zustand";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../types";

type UserStore = {
  users: User[];
  favorites: User[];
  fetchUsers: () => Promise<void>;
  toggleFavorite: (user: User) => void;
  loadFavorites: () => Promise<void>;
  theme: Theme;
};
type Theme = "light" | "dark";

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  favorites: [],
  theme: "light",

  fetchUsers: async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      set({ users: response.data });
    } catch (error) {
      console.error("Ошибка загрузки пользователей:", error);
    }
  },

  toggleFavorite: async (user) => {
    const { favorites } = get();
    const isFavorite = favorites.some((fav) => fav.id === user.id);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.id !== user.id)
      : [...favorites, user];

    set({ favorites: updatedFavorites });
    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  },

  loadFavorites: async () => {
    const storedFavorites = await AsyncStorage.getItem("favorites");
    set({ favorites: storedFavorites ? JSON.parse(storedFavorites) : [] });
  },
  toggleTheme: async () => {
    const { theme } = get();
    const newTheme = theme === "light" ? "dark" : "light";
    set({ theme: newTheme });
    await AsyncStorage.setItem("theme", newTheme);
  },

  loadTheme: async () => {
    const storedTheme = await AsyncStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      set({ theme: storedTheme });
    }
  },
}));
