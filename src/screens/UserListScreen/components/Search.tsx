import { TextInput, StyleSheet } from "react-native";
import React, { FC } from "react";

type Props = {
  search: string;
  setSearch: (search: string) => void;
};

const Search: FC<Props> = ({ search, setSearch }) => {
  return (
    <TextInput
      placeholder="Поиск по имени"
      value={search}
      onChangeText={setSearch}
      style={styles.search}
    />
  );
};

export default Search;
const styles = StyleSheet.create({
  search: { padding: 10, borderBottomWidth: 1 },
});
