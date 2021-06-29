

// Fonction qui enleve les accents 
function noAccent(originalText){
originalText = originalText.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
console.log(result)
}

//creer un tableau des ingrédients
var ingredientArray = [];
createIngredientArray(ingredientArray);

function createIngredientArray (ingredientList){

    for (var i = 0; i < recipes.length; i++) {
        let ingredients = recipes[i].ingredients;
        for (var j = 0; j < ingredients.length; j++){
            let ingredient = ingredients[j].ingredient.toLowerCase();
            if (!ingredientList.includes(ingredient)){
                ingredientList.push(ingredient);
            }
        }
    }
    console.log("liste des ingredients")
    console.log(ingredientArray); // vérifie le tableau Ingredient
}

//trie le tableau ingredients suivant l'input de la barre de recherche
let searchBar = document.getElementById("searchbar__text");
let ingredientArrayFilter = [];
searchBar.addEventListener("change", function(){
    let inputSearchBar = searchBar.value.toLowerCase();
    let inputSearchBarSplit = inputSearchBar.split(" ");

if(inputSearchBarSplit.indexOf(" ") == -1){
    for (var i = 0 ; i < ingredientArray.length -1; i++){
        if(ingredientArray[i].includes(inputSearchBar)){
            ingredientArrayFilter.push(i);
            // let showRecipes = RecipesFilter(ingredient);
            // console.log(showRecipes);
            }
        }
    }
    console.log(ingredientArrayFilter);
    RecipesFilter()
})

// RecipesFilter()



// //créer un tableau de recette filtrer

function RecipesFilter() {
    let recipesFilter = [];
    let indexIngredientsArray = ingredientArrayFilter[i];
    for(var i = 0 ; i <recipes.length -1; i++){
        let ingredients = recipes[i].ingredients;
        for(var j = 0 ; j < ingredients.length -1; j++){
            let ingredientFilterList = ingredients[j].ingredient
            if(ingredientFilterList == indexIngredientsArray){
                recipesFilter.push(ingredient);
                console.log(recipesFilter);
            }
        }
    }
}




// function RecipesFilter() {
//     let ingredientsrecipe = document.getElementsByClassName("ingredients");
//     let recipe = ingredientArrayFilter[i];
//         for(var i = 0; i < ingredientArrayFilter.length; i++) {
//             Console.log(ingredientArrayFilter);
//             ingredientsrecipe.innerHTML = recipe;
//         }
// }

























//const applianceArray = [];
//createapplianceArray(applianceArray);

//function createapplianceArray (applianceList){
//    for (var i = 0; i < recipes.length; i++) {
//        let appliance = recipes[i].appliance;
//            if (!applianceList.includes(appliance)){
//                applianceList.push(appliance);
//            }
//        }
//    }

