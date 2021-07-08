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
    searchBar.addEventListener("change", ingredientFilter);
    // searchBar.addEventListener("change", applianceFilter);
    // searchBar.addEventListener("change", UstensilFilter);
    
    //**************** trie le tableau ingredients suivant l'input de la barre de recherche ****************
        function ingredientFilter(){
        let inputSearchBar = searchBar.value.toLowerCase();
        // noAccent(inputSearchBar)
        let inputSearchBarSplit = inputSearchBar.split(" ");
        ingredientArrayFilter = [];
    
        for (var i = 0 ; i < ingredientArray.length; i++){
            if (inputSearchBar.indexOf(" ") !== -1) {
                if(ingredientArray[i] .includes (inputSearchBar)){
                ingredientArrayFilter.push(ingredientArray[i]);
                }
            } else {
                if(ingredientArray[i] === inputSearchBar){
                    ingredientArrayFilter.push(ingredientArray[i]);
                }
                let indexIngredient = [];
                    if(ingredientArray[i].includes(inputSearchBarSplit)){
                        indexIngredient.push(ingredientArray[i]);
                        console.log(indexIngredient);

                    

                }
            }
        }
                    console.log("liste des ingrédients filtrés");
                    console.log(ingredientArrayFilter);
                    RecipesFilterIngredient(ingredientArrayFilter);
                    CreateCard(recipesFilter);
        }
        
    
    //**************** trie le tableau appareil suivant l'input de la barre de recherche ****************
    function applianceFilter(){
        let inputSearchBar = searchBar.value.toLowerCase();
        // noAccent(inputSearchBar)
        let inputSearchBarSplit = inputSearchBar.split(" ");
        applianceArrayFilter = [];
        for (var i = 0 ; i < applianceArray.length; i++){
            if (inputSearchBar.indexOf(" ") !== -1) {
                if(applianceArray[i] .includes (inputSearchBar)){
                applianceArrayFilter.push(applianceArray[i]);
                }
            } else {
            let indexAppliance = [];
                for (var j = 0 ; j < inputSearchBarSplit.length; j++){
                    if(applianceArray[i].includes(inputSearchBarSplit[j])){
                        indexAppliance.push(applianceArray[i]);
                        console.log(indexAppliance);
                    }
                    for (var k = 0 ; k < indexAppliance.length; k++){
                        if(applianceArray[i] === inputSearchBar){
                        applianceArrayFilter.push(applianceArray[i]);
                        }
                    }
                }
            }
        }
                    console.log("liste des appareils filtrés");
                    console.log(applianceArrayFilter);
                    RecipesFilterAppliance(applianceArrayFilter);
                    CreateCard(recipesFilter);
        }
    
    //**************** trie le tableau ustensil suivant l'input de la barre de recherche ****************
    // function UstensilFilter(){
    //     let inputSearchBar = searchBar.value.toLowerCase();
    //     // noAccent(inputSearchBar)
    //     let inputSearchBarSplit = inputSearchBar.split(" ");
    //     ustensilsArrayFilter = [];
    //     for (var i = 0 ; i < ustensilsArray.length; i++){
    //         if (inputSearchBar.indexOf(" ") !== -1) {
    //             if(ustensilsArray[i] .includes (inputSearchBar)){
    //                 ustensilsArrayFilter.push(ustensilsArray[i]);
    //             }
    //         } else {
    //         let indexUstensils = [];
    //             for (var j = 0 ; j < inputSearchBarSplit.length; j++){
    //                 if(ustensilsArray[i].includes(inputSearchBarSplit[j])){
    //                     indexUstensils.push(ustensilsArray[i]);
    //                     console.log(indexUstensils);
    //                 }
    //                 for (var k = 0 ; k < indexUstensils.length; k++){
    //                     if(ustensilsArray[i] === inputSearchBar){
    //                         ustensilsArrayFilter.push(ustensilsArray[i]);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //                 console.log("liste des ustensiles filtrés");
    //                 console.log(ustensilsArrayFilter);
    //                 RecipesFilterUstensils(ustensilsArrayFilter);
    //                 CreateCard(recipesFilter);
    //     }
    
    
    
    
    
    
    //**************** créer un tableau de recette filtrées par ingrédient ****************
    var recipesFilter = [];
    function RecipesFilterIngredient() {
    recipesFilter = [];
        for(var i = 0 ; i < ingredientArrayFilter.length; i++){
        for(var k = 0 ; k <recipes.length; k++){
            let ingredients = recipes[k].ingredients;
            for(var j = 0 ; j < ingredients.length; j++){
                let ingredient = ingredients[j].ingredient.toLowerCase();
                if( ingredient === ingredientArrayFilter[i]){
                    let recipeName = recipes[k].name.toLowerCase();
                    recipesFilter.push(recipeName);
                }
            }
        }
    console.log("liste des recettes associés");
    console.log(recipesFilter);
    }}
    
    
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
                }
            }
        }
    console.log("liste des recettes associés");
    console.log(recipesFilter);
    }
    
    // //**************** créer un tableau de recette filtrées par ustensiles ****************
    
    // var recipesFilter = [];
    // function RecipesFilterUstensils() {
    // recipesFilter = [];
    // for(var i = 0 ; i < ustensilsArrayFilter.length; i++){
    //     for(var k = 0 ; k <recipes.length; k++){
    //         let ustensils = recipes[k].ustensils;
    //         for(var j = 0 ; j < ustensils.length; j++){
    //             if( ustensils == ustensilsArrayFilter[i]){
    //                 let recipeName = recipes[k].name.toLowerCase();
    //                 recipesFilter.push(recipeName);
    //             }
    //         }
    //     }
    // }
    // console.log("liste des recettes associés");
    // console.log(recipesFilter);
    // }
    
    
    
    
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
    
    
    
    
    
    
    
    
    