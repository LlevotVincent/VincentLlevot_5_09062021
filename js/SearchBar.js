//***************************************************************************
//***************************************************************************
//**************  lance la recherche avec la barre de recherche *************
//***************************************************************************
//***************************************************************************


searchBar.addEventListener("input", recipeFindSearchBar);

//**************** trie le tableau element suivant l'input de la barre de recherche ****************
function recipeFindSearchBar() {

    let inputSearchBar = searchBar.value
    let inputSearchBarSplit = inputSearchBar.split(" ");
    elementArraySearchBar = [];
    ingredientArrayFilter = [];
    applianceArrayFilter = [];
    ustensilArrayFilter = [];

    if (inputSearchBar.length > 2) {
        firstFind = false
        recipesFind = []
        document.getElementById("error-message").classList.add("hidden")

        for (var i = 0; i < recipes.length; i++) {
            if (recipes[i].name.includes(inputSearchBar)) {
                recipesFind.push(recipes[i]);
            }
            for (const item of recipes[i].ingredients) {
                if (item.ingredient.includes(inputSearchBar)) {
                    recipesFind.push(recipes[i]);
                }
            }
            if (recipes[i].appliance.includes(inputSearchBar)) {
                recipesFind.push(recipes[i]);
            }
            for (const item of recipes[i].ustensils) {
                if (item.includes(inputSearchBar)) {
                    recipesFind.push(recipes[i]);
                }
            }
        }
        recipesFind = [...new Set(recipesFind)]
        console.log(recipesFind);
        if (elementArrayFilter.length > 0) {
            for (var element of elementArrayFilter){
            for (var i = 0; i < recipesFind.length; i++) {

                for (const item of recipesFind[i].ingredients) {
                    if (item.ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(element)) {
                        recipeFilter.push(recipesFind[i]);
                    }
                }
                if (recipesFind[i].appliance.includes(element)) {
                    recipeFilter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").push(recipesFind[i]);
                }
                for (const item of recipesFind[i].ustensils) {
                    if (item.includes(element)) {
                        recipeFilter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").push(recipesFind[i]);
                    }
                }
            }
                recipesFind = [].concat(recipeFilter)
                recipesFind = [...new Set(recipesFind)]
                recipeFilter = []
            }
        }
        CreateCard(recipesFind);
        if (recipesFind.length == 0 && inputSearchBar.length > 2) {
            document.getElementById("error-message").classList.remove("hidden")
        }
    }
    else {
        recipesFind = [].concat(recipes)
        CreateCard(recipesFind)
    }
}

