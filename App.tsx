import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { useStoreApp } from "./src/store/useStoreApp";
import { useTheme } from "./src/hooks/UseTheme";

const App = () => {
  const { theme } = useStoreApp();
  const { colorTheme } = useTheme();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colorTheme.colorBackground }}
    >
      <AppNavigator />
      <StatusBar
        barStyle={theme === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent
      />
    </SafeAreaView>
  );
};

export default App;
