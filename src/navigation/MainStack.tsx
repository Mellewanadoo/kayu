import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import {RootStackParamList} from ".";
import {Routes} from "./constants";
import {FontAwesome} from "@expo/vector-icons";
import SearchScreen from "../views/SearchScreen";
import ProfilScreen from "../views/ProfilScreen";
import HistoryStack from "./HistoryStack";
import ScanStack from "./ScanStack";

const {Navigator: Stack, Screen} =
    createBottomTabNavigator<RootStackParamList>();

const MainStack = () => {
    return (
        <Stack>
            <Screen
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="history" size={24} color="black"/>
                    ),
                    tabBarLabel: "Historique",
                }}
                name={Routes.HISTORIQUE}
                component={HistoryStack}
            />
            <Screen
                options={{
                    tabBarIcon: () => (
                        <FontAwesome
                            name="barcode"
                            size={24}
                            color={"black"}
                        />
                    ),
                    tabBarLabel: "Scan",
                }}
                name={Routes.SCAN}
                component={ScanStack}
            />
            <Screen
                options={{
                    tabBarIcon: () => (
                        <FontAwesome
                            name="search"
                            size={24}
                            color={"black"}
                        />
                    ),
                    tabBarLabel: "Recherche",
                }}
                name={Routes.SEARCH}
                component={SearchScreen}
            />
            <Screen
                options={{
                    tabBarIcon: () => (
                        <FontAwesome
                            name="user"
                            size={24}
                            color={"black"}
                        />
                    ),
                    tabBarLabel: "Profil",
                }}
                name={Routes.PROFIL}
                component={ProfilScreen}
            />
        </Stack>
    );
};

export default MainStack;
