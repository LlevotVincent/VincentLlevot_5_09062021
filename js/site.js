
//creer un tableau des ingrédients
const ingredientArray = [];
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

//trie le tableau ingredients suivant l'input de la barre de recherche Ne fonctionne pas
const searchBar = document.getElementById("searchbar__text");
searchBar.addEventListener("keyup", function(){
    console.table(ingredientArray);
    const inputSearchBar = searchbar__text.value;
    const ingredientfilter = ingredientArray.filter(item => item.value.includes(inputSearchBar));
    console.table(ingredientfilter)
});


