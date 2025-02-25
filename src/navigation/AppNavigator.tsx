import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { UserListScreen } from "../screens/UserListScreen";
import { UserDetailScreen } from "../screens/UserDetailScreen";
import { RootStackParamList } from "../types";

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={{ title: "Пользователи" }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={{ title: "Детали пользователя" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
