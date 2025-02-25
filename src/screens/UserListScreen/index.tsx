import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList, User } from "../../types";
import Search from "./components/Search";
import ItemUser from "./components/ItemUser";
import { useUserStore } from "../../store/useFavoritesStore";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "UserList">;
};

export const UserListScreen: FC<Props> = ({ navigation }) => {
  const { users, fetchUsers, loadFavorites } = useUserStore();
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUsers();
    loadFavorites();
  }, []);

  const renderItemList = useCallback(
    ({ item }: { item: User }) => (
      <ItemUser user={item} navigation={navigation} />
    ),
    []
  );
  console.log("users", users);
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
