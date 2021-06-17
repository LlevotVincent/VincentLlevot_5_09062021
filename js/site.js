
//creer un tableau des ingrédients
var ingredientArray = [];
createIngredientArray(ingredientArray);

function createIngredientArray (ingredientList){
    for (var i = 0; i < recipes.length; i++) {
        let ingredients = recipes[i].ingredients;
        for (var j = 0; j < ingredients.length; j++){
            let ingredient = ingredients[j].ingredient;
            if (!ingredientList.includes(ingredient)){
                ingredientList.push(ingredient);
            }
        }
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


//trie le tableau ingredients suivant l'input de la barre de recherche Ne fonctionne pas

let ingredientFilter = []
let searchBar = document.getElementById("searchbar__text");

searchBar.addEventListener("keyup", function(){
 //console.table(ingredientArray); // vérifie le tableau Ingredient

let inputSearchBar = searchBar.value;
let ingredientResult = ingredientArray.indexOf(inputSearchBar);
console.log(ingredientResult)
while (ingredientResult !== -1){
    ingredientFilter.push(ingredientResult);
    ingredientResult = ingredientArray.indexOf(searchBar.value, ingredientResult+1);
    console.table(ingredientFilter);

}


   // const ingredientfilter = ingredientArray.filter(item => item.value.includes(inputSearchBar));
   // console.table(ingredientfilter)
});


