import axios from "axios";

function getInfosByCodeProduit(code: string) {
    return axios.get<JSON>("https://world.openfoodfacts.org/api/v0/product/" + code + ".json")
}

export { getInfosByCodeProduit };
