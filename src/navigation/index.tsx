import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainStack from "./MainStack";

export type RootStackParamList = {
  History: undefined;
  Scan: undefined;
  Recherche: undefined;
  Profil: undefined;
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default MainNavigator;
