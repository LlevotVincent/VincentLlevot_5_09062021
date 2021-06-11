
const searchBar = document.getElementById("searchbar__text");

searchBar.addEventListener("keyup",ingredientArray)
const inputSearchBar = searchBar.value;




//creer un tableau des ingrédients

function ingredientArray(){
    for (var i = 0; i < recipes.length; i++) {
        let ingredients = (recipes[i].ingredients);
        for (var j = 0; j < ingredients.length; j++){
            let ingredient = (ingredients[j].ingredient);
            if (ingredient.includes(inputSearchBar)){
                console.log(ingredient)
            }
        }
    }
}






