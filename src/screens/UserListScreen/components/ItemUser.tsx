import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import Animated, { FadeInRight } from "react-native-reanimated";
import { RootStackParamList, User } from "../../../types";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "UserList">;
  user: User;
};
const ItemUser: FC<Props> = ({ navigation, user }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("UserDetail", { user })}
      >
        <Animated.View entering={FadeInRight} style={styles.item}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.city}>{user.address.city}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemUser;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: 70,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    padding: 12,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "gray",
  },
  city: {
    fontSize: 14,
    color: "#777",
  },
});
