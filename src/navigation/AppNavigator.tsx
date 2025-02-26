import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackParamList } from "../types";
import { UserDetailScreen } from "@screens/UserDetailScreen";
import { UserListScreen } from "@screens/UserListScreen";
import { useTheme } from "@hooks/UseTheme";

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const { colorTheme } = useTheme();
  const defaultScreenOptions = {
    headerTintColor: colorTheme.colorText,
    headerStyle: { backgroundColor: colorTheme.colorBackground },
  };
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: colorTheme.colorBackground,
        },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="UserList"
          component={UserListScreen}
          options={{ title: "Пользователи", ...defaultScreenOptions }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetailScreen}
          options={{ title: "Детали пользователя", ...defaultScreenOptions }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
