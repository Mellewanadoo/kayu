import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import {BarCodeEvent, BarCodeScanner} from "expo-barcode-scanner";
import {getInfosByCodeProduit} from "../services/OpenFoodFactAPI";

type ScanProps={}

export default function ScanScreen({}:ScanProps) {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }:BarCodeEvent) => {
        setScanned(true);
        getInfosByCodeProduit(data).then( (productData) => console.error(productData));

        //alert(`${data}`);
    };

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
            {scanned && <Button title={'Tap to ScanScreen Again'} onPress={() => setScanned(false)} />}
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
