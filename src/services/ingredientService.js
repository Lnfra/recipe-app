let ingredients = [{ id: 1, name: "chicken", isExcludedFromMatch: false },
{ id: 2, name: "beef", isExcludedFromMatch: false },
{ id: 3, name: "lamb", isExcludedFromMatch: false },
{ id: 4, name: "shrimp", isExcludedFromMatch: false },
{ id: 5, name: "fish", isExcludedFromMatch: false },
{ id: 6, name: "coconut oil", isExcludedFromMatch: false },
{ id: 7, name: "chicken breast halves", isExcludedFromMatch: false },
{ id: 8, name: "chicken wings", isExcludedFromMatch: false },
{ id: 9, name: "parmesan cheese", isExcludedFromMatch: false },
{ id: 10, name: "eggs", isExcludedFromMatch: false },
{ id: 11, name: "bak choy", isExcludedFromMatch: false },
{ id: 12, name: "basil", isExcludedFromMatch: false },
{ id: 13, name: "black pepper", isExcludedFromMatch: false },
{ id: 14, name: "all-purpose flour", isExcludedFromMatch: false },
{ id: 15, name: "olive oil", isExcludedFromMatch: false },
{ id: 16, name: "salt", isExcludedFromMatch: true },
{ id: 17, name: "tomato sauce", isExcludedFromMatch: true },
{ id: 18, name: "mozarella cheese", isExcludedFromMatch: false },
{ id: 19, name: "water", isExcludedFromMatch: true },
{ id: 20, name: "potato", isExcludedFromMatch: false },
{ id: 21, name: "carrot", isExcludedFromMatch: false },
{ id: 22, name: "onion", isExcludedFromMatch: true },
{ id: 23, name: "garlic", isExcludedFromMatch: true },
{ id: 24, name: "rosemary", isExcludedFromMatch: false },
{ id: 25, name: "parsley", isExcludedFromMatch: false },
{ id: 26, name: "lime juice", isExcludedFromMatch: false },
{ id: 27, name: "mojito marinade", isExcludedFromMatch: false },
{ id: 28, name: "mint sprigs", isExcludedFromMatch: false },
{ id: 29, name: "bread crumbs", isExcludedFromMatch: false },
{ id: 30, name: "cooking oil", isExcludedFromMatch: true },
{ id: 31, name: "red chilli", isExcludedFromMatch: false },
{ id: 32, name: "cabbage", isExcludedFromMatch: false },
{ id: 33, name: "wine", isExcludedFromMatch: false },
{ id: 34, name: "sesame oil", isExcludedFromMatch: true },
{ id: 35, name: "green beans", isExcludedFromMatch: false },
{ id: 36, name: "rice", isExcludedFromMatch: false },
{ id: 37, name: "kecap manis", isExcludedFromMatch: false },
{ id: 38, name: "oyster sauce", isExcludedFromMatch: false },
{ id: 39, name: "caster sugar", isExcludedFromMatch: false },
{ id: 40, name: "crab", isExcludedFromMatch: false },
{ id: 41, name: "oil", isExcludedFromMatch: false },
{ id: 42, name: "butter", isExcludedFromMatch: false },
{ id: 43, name: "ginger", isExcludedFromMatch: false },
{ id: 44, name: "white pepper", isExcludedFromMatch: false },
{ id: 45, name: "ground coriander", isExcludedFromMatch: false },
{ id: 46, name: "fresh coriander", isExcludedFromMatch: false },
{ id: 47, name: "spring onion", isExcludedFromMatch: false },
{ id: 48, name: "vegetable oil", isExcludedFromMatch: false },
{ id: 49, name: "beef stew meat", isExcludedFromMatch: false },
{ id: 50, name: "beef bouillon", isExcludedFromMatch: false },
{ id: 51, name: "salmon fillet", isExcludedFromMatch: false },
{ id: 52, name: "seafood seasoning", isExcludedFromMatch: false },
{ id: 53, name: "coconut cream", isExcludedFromMatch: false },
{ id: 54, name: "red thai curry sauce", isExcludedFromMatch: false },
{ id: 55, name: "dried rice stick vermicelli noodles", isExcludedFromMatch: false },
{ id: 56, name: "spicy ketchup", isExcludedFromMatch: false },
{ id: 57, name: "dried shrimp", isExcludedFromMatch: false },
{ id: 58, name: "chilli sauce", isExcludedFromMatch: false },
{ id: 59, name: "peanut oil", isExcludedFromMatch: false },
{ id: 60, name: "char siew", isExcludedFromMatch: false },
{ id: 61, name: "shitake mushroom", isExcludedFromMatch: false },
{ id: 62, name: "frozen peas", isExcludedFromMatch: false },
{ id: 63, name: "light soy sauce", isExcludedFromMatch: false },
{ id: 64, name: "sea salt", isExcludedFromMatch: false },
{ id: 65, name: "corn starch", isExcludedFromMatch: false },
{ id: 66, name: "chicken broth", isExcludedFromMatch: false },
{ id: 67, name: "fish sauce", isExcludedFromMatch: false },
{ id: 68, name: "rice vinegar", isExcludedFromMatch: false },
{ id: 69, name: "chile-garlic sauce", isExcludedFromMatch: false },
{ id: 70, name: "rice noodle", isExcludedFromMatch: false },
{ id: 71, name: "zucchini", isExcludedFromMatch: false },
{ id: 72, name: "red bell pepper", isExcludedFromMatch: false },
{ id: 73, name: "peanut", isExcludedFromMatch: false },
{ id: 74, name: "cilantro", isExcludedFromMatch: false },
{ id: 75, name: "scallion", isExcludedFromMatch: false },
{ id: 76, name: "kosher salt", isExcludedFromMatch: false },
{ id: 77, name: "arctic char", isExcludedFromMatch: false },
{ id: 78, name: "dijon mustard", isExcludedFromMatch: false },
{ id: 79, name: "soy sauce", isExcludedFromMatch: false },
{ id: 80, name: "celery", isExcludedFromMatch: false },
{ id: 81, name: "lime", isExcludedFromMatch: false },
{ id: 82, name: "fettuccinne pasta", isExcludedFromMatch: false },
{ id: 80, name: "cayenne pepper", isExcludedFromMatch: false },
{ id: 82, name: "sour cream", isExcludedFromMatch: true },
{ id: 80, name: "pepper", isExcludedFromMatch: true },
]

export function getIngredients(){
    return ingredients.sort((a,b)=>{
        return a.name.localeCompare(b.name)
    })
}

export function saveIngredients(newIngredients){
    if (newIngredients.length===0) return
    console.log('newIngredients in ingredient service', newIngredients)
    newIngredients = newIngredients.map((ingredient,index)=>({...ingredient, id:Date.now().toString()+index}))
    ingredients = [...ingredients, ...newIngredients]
    console.log('ingredients list =>',ingredients)

    return newIngredients
}

export function ingredientsAddLabelValueProperty(ingredients){
    return ingredients.map(ingredient => {
        ingredient.label = ingredient.name
        ingredient.value = ingredient.name
        return ingredient
      })
}