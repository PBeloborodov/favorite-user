import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { TouchableOpacity, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, User } from "../../types";
import Search from "./components/Search";
import ItemUser from "./components/ItemUser";
import { useStoreApp } from "../../store/useStoreApp";
import IconTheme from "../../assets/svg/icon-theme";
import { useTheme } from "../../hooks/UseTheme";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "UserList">;
};

export const UserListScreen: FC<Props> = ({ navigation }) => {
  const { users, fetchUsers, loadFavorites, toggleTheme, theme, loadTheme } =
    useStoreApp();
  const [search, setSearch] = useState("");
  const { colorTheme } = useTheme();

  useEffect(() => {
    fetchUsers();
    loadFavorites();
    loadTheme();
  }, []);

  const renderItemList = useCallback(
    ({ item }: { item: User }) => (
      <ItemUser user={item} navigation={navigation} />
    ),
    []
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={toggleTheme} style={{ padding: 15 }}>
          <IconTheme color={colorTheme.colorText} />
        </TouchableOpacity>
      ),
      headerTintColor: theme === "light" ? "#000" : "#fff",
      headerStyle: { backgroundColor: theme === "light" ? "#fff" : "#000" },
    });
  }, [navigation, theme]);

  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      ),
    [users, search]
  );
  return (
    <View style={{ flex: 1 }}>
      <Search search={search} setSearch={setSearch} />
      <FlashList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItemList}
        onRefresh={fetchUsers}
        refreshing={false}
        estimatedItemSize={70}
      />
    </View>
  );
};
