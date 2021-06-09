type Product = {
    code: string
    image_small_url: string
    image_thumb_url: string
    image_url: string
    ingredients: Array<Ingredient>
    ingredients_text: string
    nutriscore_grade: String
    nutriscore_score: number
    nutriscore_data: {score: string}
    origins: string
    product_name: string
    quantity: string
}
