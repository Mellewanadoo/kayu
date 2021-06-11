import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/core";
import {StackNavigationProp} from "@react-navigation/stack";
import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text} from "react-native";
import {Routes} from "../navigation/constants";
import Product from "../types/Product";
import {HistoryStackParamsList} from "../navigation/HistoryStack";


type PoductsScreenNavigationProp = StackNavigationProp<HistoryStackParamsList,
    Routes.LIST>;

type Props = {
    navigation: PoductsScreenNavigationProp;
};

const PoductsScreen = ({navigation}: Props) => {
    const [poducts, setPoducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const {navigate} = useNavigation();
    return<Text>history</Text>
};


const styles = StyleSheet.create({
    subtitle: {
        textAlign: "right",
        marginBottom: 10,
        marginTop: -20,
    },
});

export default HistoryScreen;
