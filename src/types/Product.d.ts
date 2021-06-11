type Product = {
    code: string
    product: {
        image_small_url: string
        image_thumb_url: string
        image_url: string
        ingredients: Array<Ingredient>
        ingredients_text: string
        nutriscore_grade: string
        nutriscore_score: number
        nutriscore_data: {score: string}
        ecoscore_grade: string
        ecoscore_score: number
        ecoscore_data: {score: string}
        origins: string
        product_name: string
        quantity: string
        image_nutrition_url: string
        additives_tags: Array<string>
        allergens_from_ingredients: Array<string>
        score_fr: Number
    }
}
export default Product;
