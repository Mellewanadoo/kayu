import React, {useEffect, useState} from 'react';
import Scan from "./views/Scan";
import {getInfosByCodeProduit} from "./services/OpenFoodFactAPI";

export function Main(){
  const afterCodeScanned =(codeProduit:string) =>{
      console.error(getInfosByCodeProduit(codeProduit))
  }

    return(
     <><Scan  afterCodeScanned={afterCodeScanned}/></>
    );
}
