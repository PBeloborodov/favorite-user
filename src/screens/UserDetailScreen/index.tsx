import React, { FC, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useStoreApp } from "../../store/useStoreApp";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { useTheme } from "../../hooks/UseTheme";
type Props = {
  route: RouteProp<RootStackParamList, "UserDetail">;
};
export const UserDetailScreen: FC<Props> = ({ route }) => {
  const { user } = route.params;
  const { toggleFavorite, favorites } = useStoreApp();
  const isFavorite = favorites.some((fav) => fav.id === user.id);
  const styles = useStyle();
  return (
    <View style={{ padding: 20 }}>
      <Text style={[styles.text, styles.name]}>{user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Text style={styles.text}>Телефон: {user.phone}</Text>
      <Text style={styles.text}>Компания: {user.company.name}</Text>
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
const useStyle = () => {
  const { colorTheme } = useTheme();
  const style = StyleSheet.create({
    text: {
      color: colorTheme.colorText,
    },
    name: {
      fontSize: 24,
    },
  });
  return style;
};
