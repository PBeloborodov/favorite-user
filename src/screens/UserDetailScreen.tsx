import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStoreApp } from "../store/useStoreApp";

export const UserDetailScreen = ({ route }) => {
  const { user } = route.params;
  const { toggleFavorite, favorites } = useStoreApp();
  const isFavorite = favorites.some((fav) => fav.id === user.id);
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Телефон: {user.phone}</Text>
      <Text>Компания: {user.company.name}</Text>
      <Button
        title={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        onPress={() => {
          toggleFavorite(user);
        }}
      />
    </View>
  );
};
//
