
const searchBar = document.getElementById("searchbar__text");

    //**************** creer un tableau des ingrédients, appareils et ustensiles****************
    let ingredientArray = [];
    let applianceArray = [];
    let ustensilArray = [];
    createElementArray();
    
function createElementArray (){
    
    for (var i = 0; i < recipes.length; i++) {
        let ingredients = recipes[i].ingredients;
        for (var j = 0; j < ingredients.length; j++){
            let ustensils = recipes[i].ustensils;
            for (var k = 0; k < ustensils.length; k++){
                let listOfIngredient = ingredients[j].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (!ingredientArray.includes(listOfIngredient)){
                ingredientArray.push(listOfIngredient);
                }
                let listOfAppliance = recipes[i].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (!applianceArray.includes(listOfAppliance)){
                applianceArray.push(listOfAppliance);
                }
                let listOfUstensils = ustensils[k].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (!ustensilArray.includes(listOfUstensils)){
                ustensilArray.push(listOfUstensils);
                }
            }
        }
    }
    // console.log("liste des ingredients")
    // console.log(ingredientArray);
    console.log("liste des appareils")
    console.log(applianceArray);
    console.log("liste des ustensiles")
    console.log(ustensilArray);
}
    
    //**************** lance la recherche par la barre de recherche ****************

    let ingredientArrayFilter = [];
    let applianceArrayFilter = [];
    let ustensilArrayFilter = [];
    searchBar.addEventListener("change", ElementArrayFilter);
    
// function Filter(){
//     const inputSearchBar = searchBar.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

//     ElementArrayFilter(inputSearchBar);
//     }


    //**************** trie le tableau ingredients suivant l'input de la barre de recherche ****************
function ElementArrayFilter(){
    let inputSearchBar = searchBar.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        // noAccent(inputSearchBar)
    let inputSearchBarSplit = inputSearchBar.split(" ");
    elementArrayFilter = []
    ingredientArrayFilter = [];
    applianceArrayFilter = [];
    ustensilArrayFilter = [];
        for (var i = 0 ; i < ingredientArray.length; i++){
            if(ingredientArray[i].includes(inputSearchBarSplit)){
                elementArrayFilter.push(ingredientArray[i]);
            }else if (inputSearchBar.indexOf(" ") !== -1) {
                if(ingredientArray[i].includes (inputSearchBar)){
                    elementArrayFilter.push(ingredientArray[i]);
                }
            }       
        }     
        for (var i = 0 ; i < applianceArray.length; i++){
            if(applianceArray[i].includes(inputSearchBarSplit)){
                elementArrayFilter.push(applianceArray[i]);
            }else if (inputSearchBar.indexOf(" ") !== -1) {
                if(applianceArray[i] .includes (inputSearchBar)){
                    elementArrayFilter.push(applianceArray[i]);
                }
            } 
        }

        for (var i = 0 ; i < ustensilArray.length; i++){
            if(ustensilArray[i].includes(inputSearchBarSplit)){
                elementArrayFilter.push(ustensilArray[i]);
            }else if (inputSearchBar.indexOf(" ") !== -1) {
                if(ustensilArray[i] .includes (inputSearchBar)){
                    elementArrayFilter.push(ustensilArray[i]);
                }
            }
        }

    console.log("liste des éléments filtrés");
    console.log(elementArrayFilter);
    RecipesFilter(elementArrayFilter);     
}

    //**************** créer un tableau de recette filtrées par ingrédient ****************
    var recipesFilter = [];
    function RecipesFilter() {
    recipesFilter = [];

    for(var k = 0 ; k <recipes.length; k++){
    let recipeName = recipes[k].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let ingredients = recipes[k].ingredients;
        for(var i = 0 ; i < elementArrayFilter.length; i++){
            for(var j = 0 ; j < ingredients.length; j++){
            let ingredient = ingredients[j].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if(ingredient .includes (elementArrayFilter[i])){
                    if (!recipesFilter.includes(recipeName)){
                    recipesFilter.push(recipeName);
                    }
                }
            }
            let appliances = recipes[k].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              if( appliances .includes ( elementArrayFilter[i])){
                    if (!recipesFilter.includes(recipeName)){
                    recipesFilter.push(recipeName);
                    }
                }
            let ustensils = recipes[k].ustensils;
            for(var j = 0 ; j < ustensils.length; j++){
                let ustensil = ustensils[j].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if( ustensil .includes(elementArrayFilter[i])){
                    if (!recipesFilter.includes(recipeName)){
                    recipesFilter.push(recipeName);
                    }
                }
            }   
        }  
        CreateCard(recipesFilter);        
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
    
    
    
    
    