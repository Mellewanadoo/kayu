import axios from "axios";

function getInfosByCodeProduit(code: string) {
    return axios.get<Product>("https://world.openfoodfacts.org/api/v0/product/" + code + ".json")
}

export { getInfosByCodeProduit };
