import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Product from "../types/Product";

type Props = {
    products: Product[];
    isLoading: boolean;
    onScanned: () => void;
};

const ProductList = ({ products=[], isLoading, onScanned }: Props) => {

    return (
        <View style={styles.container}>
            {products.length ? (
                <FlatList
                    data={products}
                    renderItem={({ item }) => <Text>{item.product.product_name}</Text>}
                    keyExtractor={({ code }) => code }
                />
            ) : (
                <Text>Pas de produit stockée pour l'instant...</Text>
            )}
        </View>
    );
};

export default ProductList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
