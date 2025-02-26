import { useStoreApp } from "../store/useStoreApp";
export type ColorTheme = {
  colorText: string;
  colorBackground: string;
  grayWhite: string;
};

export const useTheme = () => {
  const { theme } = useStoreApp();
  const colorTheme: ColorTheme = {
    colorText: theme === "light" ? "#000" : "#fff",
    colorBackground: theme === "light" ? "#fff" : "#000",
    grayWhite: theme === "light" ? "#777" : "#fff",
  };
  return { colorTheme };
};
