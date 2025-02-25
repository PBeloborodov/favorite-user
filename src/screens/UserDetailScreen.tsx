import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserDetailScreen = ({ route }) => {
  const { user } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = async () => {
    const storedFavorites = await AsyncStorage.getItem("favorites");
    let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== user.id);
    } else {
      favorites.push(user);
    }

    await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Телефон: {user.phone}</Text>
      <Text>Компания: {user.company.name}</Text>
      <Button
        title={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        onPress={toggleFavorite}
      />
    </View>
  );
};
//
