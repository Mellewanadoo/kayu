import React from "react";
import {Text} from "react-native";
import {useRoute} from "@react-navigation/native";

export default function ProductScreen(){
    const {params}=useRoute()
    console.log(params)
    return <Text>Product</Text>
}
