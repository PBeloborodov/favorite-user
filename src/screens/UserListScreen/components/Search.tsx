import { TextInput, StyleSheet } from "react-native";
import React, { FC } from "react";
import { ColorTheme, useTheme } from "../../../hooks/UseTheme";

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const Search: FC<Props> = ({ search, setSearch }) => {
  const { colorTheme } = useTheme();
  const styles = useStyle(colorTheme);
  return (
    <TextInput
      placeholder="Поиск по имени"
      value={search}
      onChangeText={setSearch}
      style={styles.search}
      placeholderTextColor={colorTheme.colorText}
    />
  );
};

export default Search;
const useStyle = (colorTheme: ColorTheme) => {
  return StyleSheet.create({
    search: {
      padding: 10,
      borderBottomWidth: 1,
      color: colorTheme.colorText,
      backgroundColor: colorTheme.colorBackground,
      borderBottomColor: colorTheme.grayWhite,
    },
  });
};
