import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {RouteProp, useRoute} from "@react-navigation/native";
import {ScanStackParamsList} from "../navigation/ScanStack";
import {Routes} from "../navigation/constants";
import {Card} from 'react-native-elements'


type ProductScreenRouteProp = RouteProp<ScanStackParamsList, Routes.PRODUCT>
export default function ProductScreen() {
    const {params} = useRoute<ProductScreenRouteProp>()
    return <>
        <View>
            <Card>
                <Card.Title>{!!params?.product?.product.product_name ? params.product.product.product_name : "Pas de nom à ce produit"}</Card.Title>
                <Card.Divider/>
                <Card.Image style={styles.card}
                    source={{uri: !!params?.product?.product.image_url ? params.product.product.image_url : "pas d'image"}}>
                </Card.Image>
                <Text style={styles.text}>
                    Nutriscore
                    : {!!params?.product?.product.nutriscore_grade ? params.product.product.nutriscore_grade : "pas d'info"}
                </Text>
                <Text style={styles.text}>
                    Ecoscore
                    : {!!params?.product?.product.score_fr ? params.product.product.score_fr + "/100" : "pas d'info"}
                </Text>
                <Text style={styles.text}>
                    Allergène
                    : {!!params?.product?.product.allergens_from_ingredients ? params.product.product.allergens_from_ingredients : "pas d'info"}
                </Text>
                <Text style={styles.text}>
                    Ingredients
                    : {!!params?.product?.product.ingredients_text ? params.product.product.ingredients_text : "pas d'info"}
                </Text>

            </Card>
        </View>
    </>
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        resizeMode: 'contain',
        height:300,
        width: 400,
    },
    text: {
        marginTop: 10,
    },
});
