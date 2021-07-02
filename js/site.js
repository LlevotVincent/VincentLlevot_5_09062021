

// Fonction qui enleve les accents 
function noAccent(originalText){
originalText = originalText.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
console.log(result)
}

//**************** creer un tableau des ingrédients ****************
let ingredientArray = [];
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
    // console.log("liste des ingredients")
    // console.log(ingredientArray);
}

//**************** trie le tableau ingredients suivant l'input de la barre de recherche ****************
let searchBar = document.getElementById("searchbar__text");
var ingredientArrayFilter = [];
searchBar.addEventListener("change", function(){
    let inputSearchBar = searchBar.value.toLowerCase();
    let inputSearchBarSplit = inputSearchBar.split(" ");
    ingredientArrayFilter = [];


if(inputSearchBarSplit.indexOf(" ") == -1){
    for (var i = 0 ; i < ingredientArray.length; i++){
        for (var j = 0 ; j < inputSearchBarSplit.length; j++){
            if (ingredientArray[i] === inputSearchBar){
                ingredientArrayFilter.push(ingredientArray[i]);

    } else {
        if(ingredientArray[i] === (inputSearchBarSplit[j])){
            ingredientArrayFilter.push(ingredientArray[i]);
        }}}}}




    // for (var i = 0 ; i < ingredientArray.length; i++){
    //         for (var j = 0 ; j < inputSearchBarSplit.length; j++){
    //             if(ingredientArray[i].includes(inputSearchBarSplit)){
    //              ingredientArrayFilter.push(ingredientArray[i]);
    // } else {
    //         (ingredientArray[i].includes(inputSearchBar))
    //         ingredientArrayFilter.push(ingredientArray[i]);
    //         }




    console.log("liste des ingrédients filtrés");
    console.log(ingredientArrayFilter);
    RecipesFilter(ingredientArrayFilter);
    CreateCard();
})

//**************** créer un tableau de recette filtrer ****************
var recipesFilter = [];
function RecipesFilter() {
recipesFilter = [];
    for(var i = 0 ; i <ingredientArrayFilter.length; i++){
        let ingredientFilter = ingredientArrayFilter[i];
    for(var k = 0 ; k <recipes.length; k++){
        let ingredients = recipes[k].ingredients;
        for(var j = 0 ; j < ingredients.length; j++){
            let ingredient = ingredients[j].ingredient.toLowerCase();;
            if( ingredient == ingredientFilter){
                let recipeName = recipes[k].name.toLowerCase();
                recipesFilter.push(recipeName);
            }
        }
    }
}
console.log("liste des recettes associés");
console.log(recipesFilter);
}
//**************** creation de carte pour les recettes filtrés ****************

function CreateCard(){
    const mainGrid = document.getElementById("main_grid");
//--- reinitialise l affichage ---
    while (mainGrid.firstChild) {
        mainGrid.removeChild(mainGrid.firstChild);}

    for(var i = 0; i < recipesFilter.length ; i++){

        var recipeCard = document.createElement("div");
        recipeCard.classList.add("cooking_recipe");
        mainGrid.appendChild(recipeCard);

        var imgFood = document.createElement("div");
        imgFood.classList.add("img_food","a");
        recipeCard.appendChild(imgFood);

        var titleRecipes = document.createElement("h2")
        titleRecipes.classList.add("recipe_title","d")
        recipeCard.appendChild(titleRecipes)
        titleRecipes.innerText = recipesFilter[i];

        var ingredient =  document.createElement("div")
        ingredient.classList.add("ingredients","b")
        recipeCard.appendChild(ingredient);

        var step =  document.createElement("div")
        step.classList.add("step","c")
        recipeCard.appendChild(step);
    }
}




















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

