import React from 'react';
import Scan from "./views/Scan";
import {getInfosByCodeProduit} from "./services/OpenFoodFactAPI";

export function Main() {
    const afterCodeScanned = (code: string) => {
        getInfosByCodeProduit(code).then( (data) => console.error(data))
    }

    return (
        <><Scan afterCodeScanned={afterCodeScanned}/></>
    );
}
