import {Routes} from "./constants";
import ProductScreen from "../views/ProductScreen";
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ScanScreen from "../views/ScanScreen";
import Product from "../types/Product";

export type ScanStackParamsList = {
    [Routes.SCAN]:undefined
    [Routes.PRODUCT]: { product:Product }
}

const {Navigator: Stack, Screen} =createStackNavigator<ScanStackParamsList>()

function ScanStack() {
    return (
        <Stack>
            <Screen name={Routes.SCAN} component={ScanScreen} />
            <Screen name={Routes.PRODUCT} component={ProductScreen} />
        </Stack>
    );
}
export default ScanStack;
