import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {BarCodeEvent, BarCodeScanner} from "expo-barcode-scanner";
import {getInfosByCodeProduit} from "../services/OpenFoodFactAPI";
import {useNavigation} from "@react-navigation/native";
import {Routes} from "../navigation/constants";
import Product from "../types/Product";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ScanProps = {}

export default function ScanScreen({}: ScanProps) {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);
    const {navigate} = useNavigation();

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const setProductToStorageData = async (productToAdd: Product) => {
        const storedProduct = await AsyncStorage.getItem("@productList")
        if (storedProduct !== null) {
            const parseProduct = JSON.parse(storedProduct)
            if (Array.isArray(parseProduct)) {
                const newProductList = [...parseProduct, productToAdd]
                await AsyncStorage.setItem("@productList", JSON.stringify(newProductList))
            } else {
                await AsyncStorage.setItem("@productList", JSON.stringify([productToAdd]))
            }
        }
        else{
            await AsyncStorage.setItem("@productList", JSON.stringify([productToAdd]))
        }
    }
    const handleBarCodeScanned = ({type, data}: BarCodeEvent) => {
        setScanned(true);
        getInfosByCodeProduit(data).then((productData) => {
            const product: Product = productData.data
            setProductToStorageData(product)
            return product
        }).then(p => navigate(Routes.PRODUCT, {product: p}));

        //alert(`${data}`);
    };
    useEffect(() => {
    const aaa=async()=>{
        const bbb=await AsyncStorage.getItem("@productList")
        console.log("+++++++++++++++++++++",bbb)
    }
    aaa()
    }, [])
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (!hasPermission) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to ScanScreen Again'} onPress={() => setScanned(false)}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    barCodeView: {
        width: '100%',
        height: '50%',
        marginBottom: 40
    },
});
