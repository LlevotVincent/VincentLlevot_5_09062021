// Fonction qui enleve les accents 
function noAccent(str){
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    // console.log(str)
    }
    
    //**************** creer un tableau des ingrédients, appareils et ustensiles****************
    let ingredientArray = [];
    let applianceArray = [];
    let ustensilsArray = [];
    createElementArray();
    
function createElementArray (){
    
    for (var i = 0; i < recipes.length; i++) {
        let ingredients = recipes[i].ingredients;
        for (var j = 0; j < ingredients.length; j++){
            let ustensils = recipes[i].ustensils;
            for (var k = 0; k < ustensils.length; k++){
                let listOfIngredient = ingredients[j].ingredient.toLowerCase();
                if (!ingredientArray.includes(listOfIngredient)){
                ingredientArray.push(listOfIngredient);
                }
                let listOfAppliance = recipes[i].appliance.toLowerCase();
                if (!applianceArray.includes(listOfAppliance)){
                applianceArray.push(listOfAppliance);
                }
                let listOfUstensils = ustensils[k];
                if (!ustensilsArray.includes(listOfUstensils)){
                ustensilsArray.push(listOfUstensils);
                }
            }
        }
    }
    // console.log("liste des ingredients")
    // console.log(ingredientArray);
    // console.log("liste des appareils")
    // console.log(applianceArray);
    // console.log("liste des ustensiles")
    // console.log(ustensilsArray);
}
    
    //**************** lance la recherche par la barre de recherche ****************
    let searchBar = document.getElementById("searchbar__text");
    let ingredientArrayFilter = [];
    let applianceArrayFilter = [];
    let ustensilsArrayFilter = [];
    searchBar.addEventListener("change", filter);
    
function filter(){
    const inputSearchBar = searchBar.value.toLowerCase();
    elementArrayFilter(inputSearchBar);
    // applianceFilter(inputSearchBar);
    // ustensilFilter(inputSearchBar);
    }

    //**************** trie le tableau ingredients suivant l'input de la barre de recherche ****************
function elementArrayFilter(){
    let inputSearchBar = searchBar.value.toLowerCase();
        // noAccent(inputSearchBar)
    let inputSearchBarSplit = inputSearchBar.split(" ");
    ElementArrayFilter = [];
        for (var i = 0 ; i < ingredientArray.length; i++){
            if(ingredientArray[i].includes(inputSearchBarSplit)){
                ElementArrayFilter.push(ingredientArray[i]);
            }else if (inputSearchBar.indexOf(" ") !== -1) {
                if(ingredientArray[i] .includes (inputSearchBar)){
                    ElementArrayFilter.push(ingredientArray[i]);
                }
            }   
        }
        for (var i = 0 ; i < applianceArray.length; i++){
            if(applianceArray[i].includes(inputSearchBarSplit)){
                ElementArrayFilter.push(applianceArray[i]);
            }else if (inputSearchBar.indexOf(" ") !== -1) {
                if(applianceArray[i] .includes (inputSearchBar)){
                    ElementArrayFilter.push(applianceArray[i]);
                }
            }
        }
        for (var i = 0 ; i < ustensilsArray.length; i++){
            if(ustensilsArray[i].includes(inputSearchBarSplit)){
                ElementArrayFilter.push(ustensilsArray[i]);
            }else if (inputSearchBar.indexOf(" ") !== -1) {
                if(ustensilsArray[i] .includes (inputSearchBar)){
                    ElementArrayFilter.push(ustensilsArray[i]);
                }
            }
        }
    console.log("liste des éléments filtrés");
    console.log(ElementArrayFilter);
    RecipesFilter(ElementArrayFilter);
}

    //**************** trie le tableau appareil suivant l'input de la barre de recherche ****************
function applianceFilter(){
    let inputSearchBar = searchBar.value.toLowerCase();
        // noAccent(inputSearchBar)
    let inputSearchBarSplit = inputSearchBar.split(" ");
        applianceArrayFilter = [];
        for (var i = 0 ; i < applianceArray.length; i++){
            if(applianceArray[i].includes(inputSearchBarSplit)){
                applianceArrayFilter.push(applianceArray[i]);
            }
        }  
    console.log("liste des appareils filtrés");
    console.log(applianceArrayFilter);
    RecipesFilterAppliance(applianceArrayFilter);
}
    
    //**************** trie le tableau ustensil suivant l'input de la barre de recherche ****************
function ustensilFilter(){
    let inputSearchBar = searchBar.value.toLowerCase();
        // noAccent(inputSearchBar)
    let inputSearchBarSplit = inputSearchBar.split(" ");
        ustensilsArrayFilter = [];
        for (var i = 0 ; i < ustensilsArray.length; i++){
            if(ustensilsArray[i].includes(inputSearchBarSplit)){
                ustensilsArrayFilter.push(ustensilsArray[i]);
            }
        }
    console.log("liste des ustensiles filtrés");
    console.log(ustensilsArrayFilter);
    RecipesFilterUstensils(ustensilsArrayFilter);
}

    //**************** créer un tableau de recette filtrées par ingrédient ****************
    var recipesFilter = [];
    function RecipesFilter() {
    recipesFilter = [];
        for(var i = 0 ; i < ElementArrayFilter.length; i++){
        for(var k = 0 ; k <recipes.length; k++){
            let ingredients = recipes[k].ingredients;
            for(var j = 0 ; j < ingredients.length; j++){
                let ingredient = ingredients[j].ingredient.toLowerCase();
                if( ingredient === ElementArrayFilter[i]){
                    let recipeName = recipes[k].name.toLowerCase();
                    recipesFilter.push(recipeName);
                }
            }
            let appliances = recipes[k].appliance.toLowerCase();
                if( appliances === ElementArrayFilter[i]){
                    let recipeName = recipes[k].name.toLowerCase();
                    recipesFilter.push(recipeName);
                }
            let ustensils = recipes[k].ustensils;
            for(var j = 0 ; j < ustensils.length; j++){
                if( ustensils == ElementArrayFilter[i]){
                    let recipeName = recipes[k].name.toLowerCase();
                    recipesFilter.push(recipeName);
                }
            }
            CreateCard(recipesFilter);     
        }
    }    
    console.log("liste des recettes associés");
    console.log(recipesFilter);
    }

    //**************** créer un tableau de recette filtrées par Appareils ****************
    
    var recipesFilter = [];
    function RecipesFilterAppliance() {
    recipesFilter = [];
        for(var i = 0 ; i < applianceArrayFilter.length; i++){
        for(var k = 0 ; k <recipes.length; k++){
            let appliances = recipes[k].appliance.toLowerCase();
                if( appliances === applianceArrayFilter[i]){
                    let recipeName = recipes[k].name.toLowerCase();
                    recipesFilter.push(recipeName);
                    CreateCard(recipesFilter);
                }
            }
        }
    console.log("liste des recettes associés");
    console.log(recipesFilter);
    }
    
    // //**************** créer un tableau de recette filtrées par ustensiles ****************
    
    var recipesFilter = [];
    function RecipesFilterUstensils() {
    recipesFilter = [];
    for(var i = 0 ; i < ustensilsArrayFilter.length; i++){
        for(var k = 0 ; k <recipes.length; k++){
            let ustensils = recipes[k].ustensils;
            for(var j = 0 ; j < ustensils.length; j++){
                if( ustensils == ustensilsArrayFilter[i]){
                    let recipeName = recipes[k].name.toLowerCase();
                    recipesFilter.push(recipeName);
                    CreateCard(recipesFilter);
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
    
    
    
    
    
    
    
    
    