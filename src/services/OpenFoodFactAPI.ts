import axios from "axios";
import Product from "../types/Product";

function getInfosByCodeProduit(code: string) {
    return axios.get<Product>("https://world.openfoodfacts.org/api/v0/product/" + code + ".json")
}

export { getInfosByCodeProduit };
