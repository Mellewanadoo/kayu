import {Routes} from "./constants";
import ProductScreen from "../views/ProductScreen";
import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from "../views/ListScreen";

type HistoryStackParamsList = {
    [Routes.LIST]: undefined
    [Routes.PRODUCT]: undefined
}

const {Navigator: Stack, Screen} = createStackNavigator<HistoryStackParamsList>()

function HistoryStack() {
    return (
        <Stack initialRouteName={Routes.LIST}>
            <Screen name={Routes.LIST} component={ListScreen}/>
            <Screen name={Routes.PRODUCT} component={ProductScreen}/>
        </Stack>
    );
}

export default HistoryStack;
