

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
                let ingredientSplit = ingredient.split(' ');
                ingredientList.push(ingredientSplit);
            }
        }
    }
}

//trie le tableau ingredients suivant l'input de la barre de recherche Ne fonctionne pas
let ingredientFilter = []
let searchBar = document.getElementById("searchbar__text");

searchBar.addEventListener("change", function(){
 console.table(ingredientArray); // vérifie le tableau Ingredient
let inputSearchBar = searchBar.value.toLowerCase();
let ingredientIndex = ingredientArray.indexOf(inputSearchBar);
console.log(ingredientIndex);
for (var i = 0; i < ingredientArray.length; i++) {
if (ingredientIndex != -1){
    ingredientFilter.push(ingredientIndex);
    console.table(ingredientFilter);

}}
});

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

