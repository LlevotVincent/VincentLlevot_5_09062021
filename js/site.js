

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
    console.table(ingredientArray); // vérifie le tableau Ingredient
}

//trie le tableau ingredients suivant l'input de la barre de recherche Ne fonctionne pas




let searchBar = document.getElementById("searchbar__text");
    searchBar.addEventListener("change", function(){
let inputSearchBar = searchBar.value.toLowerCase();
let inputSearchBarSplit = inputSearchBar.split(" ");

if(inputSearchBarSplit.indexOf(" ") == -1){
    let ingredientArrayFilter = [];
    for (var i = 0 ; i < ingredientArray.length -1; i++){
        if(ingredientArray[i].includes(inputSearchBar)){
            ingredientArrayFilter.push(i);
        }
    }
    console.log(ingredientArrayFilter);
    for(var i = 0 ; i< ingredientArrayFilter.length -1 ; i++){
        if(ingredientArray[ingredientArrayFilter[i]]=== inputSearchBar) {
            console.log("mon ingredient :");
            console.log(ingredientArray[ingredientArrayFilter[i]])
        }
    }
} else {
    let inputSearchBarSplit = inputSearchBar.split(" ");
    let ingredientArrayFilter = [];
    for(var i = 0 ; i <ingredientArray.length -1; i++){
        for(var j = 0 ; j < inputSearchBarSplit.length -1; j++){
            if(ingredientArray[i].includes(inputSearchBarSplit[j])){
                ingredientArrayFilter.push(i);
            }
        }
    }
}
})



// for(var i = 0; i < ingredientArray.length; i++){
//     if(ingredientArray[i].indexOf(inputSearchBarSplit)){
//         ingredientArrayFilter.push[i];
// }
// }
// for (var i = 0; i < ingredientArray.length; i++) {
//     for(var j = 0; j < inputSearchBarSplit.length; j++){
//         if (ingredientArray[i].includes(inputSearchBarSplit[j])){
// // let ingredientIndex = ingredientArray[i].includes(inputSearchBar);
// // if (ingredientIndex != -1){
//     ingredientArrayFilter.push(i);
//     console.log(ingredientArrayFilter);
// }
// }
// }
// }
// );





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

