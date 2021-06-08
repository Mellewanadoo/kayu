import axios from "axios";

function getInfosByCodeProduit(codeProduit: string) {
    return axios.get<JSON>("https://world.openfoodfacts.org/api/v0/product/" + codeProduit + ".json")
}

export { getInfosByCodeProduit };
