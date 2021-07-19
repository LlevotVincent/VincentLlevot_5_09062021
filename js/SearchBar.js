
const searchBar = document.getElementById("searchbar__text");
const searchIcon = document.getElementsByClassName(".fa-search")
const mainGrid = document.getElementById("main_grid");

let ingredientArrayFilter = [];
let applianceArrayFilter = [];
let ustensilArrayFilter = [];

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
                ingredientArray.sort();

                }
                let listOfAppliance = recipes[i].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (!applianceArray.includes(listOfAppliance)){
                applianceArray.push(listOfAppliance);
                applianceArray.sort();
                }
                let listOfUstensils = ustensils[k].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (!ustensilArray.includes(listOfUstensils)){
                ustensilArray.push(listOfUstensils);
                ustensilArray.sort();
                }
            }
        }
    }
    // console.log("liste des ingredients")
    // console.log(ingredientArray);
    // console.log("liste des appareils")
    // console.log(applianceArray);
    // console.log("liste des ustensiles")
    // console.log(ustensilArray);
}
    
    //**************** lance la recherche par la barre de recherche ****************


searchBar.addEventListener("input", ElementArrayFilter);
    
    //**************** trie le tableau element suivant l'input de la barre de recherche ****************
function ElementArrayFilter(){
    let inputSearchBar = searchBar.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let inputSearchBarSplit = inputSearchBar.split(" ");
    elementArrayFilter = []
    ingredientArrayFilter = [];
    applianceArrayFilter = [];
    ustensilArrayFilter = [];

    if(inputSearchBar.length >2 ){
        document.getElementById("error-message").classList.add("hidden")
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
        for(var i = 0 ; i <recipes.length; i++){
            let recipeName = recipes[i].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if(recipeName.includes(inputSearchBar)){
                elementArrayFilter.push(recipeName);
            } 
        }

    console.log("liste des éléments filtrés");
    console.log(elementArrayFilter);
    RecipesToFind(elementArrayFilter);     
    }   
    if(elementArrayFilter.length ==0 && inputSearchBar.length >2 ) {
        document.getElementById("error-message").classList.remove("hidden")
    } 
}
    //**************** recherche les recettes à partir des ingredients, appareils et ustensiles ****************
    var recipesFind = [];
    function RecipesToFind() {
    recipesFind = [];

    for(var k = 0 ; k <recipes.length; k++){
    let recipeName = recipes[k].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let ingredients = recipes[k].ingredients;
        for(var i = 0 ; i < elementArrayFilter.length; i++){
            for(var j = 0 ; j < ingredients.length; j++){
            let ingredient = ingredients[j].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if(ingredient .includes (elementArrayFilter[i])){
                    if (!recipesFind.includes(recipeName)){
                    recipesFind.push(recipeName);
                    }
                }
            }
            if(recipeName.includes(elementArrayFilter[i])){
                if (!recipesFind.includes(recipeName)){
                recipesFind.push(recipeName);
                }
            }
            let appliances = recipes[k].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              if( appliances .includes ( elementArrayFilter[i])){
                    if (!recipesFind.includes(recipeName)){
                    recipesFind.push(recipeName);
                    }
                }
            let ustensils = recipes[k].ustensils;
            for(var j = 0 ; j < ustensils.length; j++){
                let ustensil = ustensils[j].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if( ustensil .includes(elementArrayFilter[i])){
                    if (!recipesFind.includes(recipeName)){
                    recipesFind.push(recipeName);
                    }
                }
            }   
        }  
        CreateCard(recipesFind);        
    }    
    console.log("liste des recettes associés");
    console.log(recipesFind);
    }
    
//**************** creation de carte pour les recettes filtrés ****************
    function CreateCard(){

        //--- reinitialise l affichage ---
        while (mainGrid.firstChild) {
            mainGrid.removeChild(mainGrid.firstChild);}
                
        for(var k = 0 ; k < recipesFind.length ; k++){
            for(var i =0 ; i < recipes.length ; i++){
                var recipeName = recipes[i].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");;
                var recipeTime = recipes[i].time;
                var recipeStep = recipes[i].description
                var recipesIngredients = recipes[i].ingredients;
    
                if(recipesFind[k] === recipeName){
            //  var card =  
            // `<div id="main_grid">
            //     <a href="#" class="cooking_recipe">
            //     <div class="img_food a"></div>
            //     <div class="recipe_Name d">
            //         <h2 class="recipe_title"></h2>
            //         <i class="far fa-clock"></i>
            //         <p class="cardTime"></p>
            //     </div>
            //     <div class="ingredients b"></div>
            //     <div class="step c"></div>
            //   </a>
            //   </div>`
            //   const titleRecipes = document.getElementsByClassName("recipe_title")
            //   titleRecipes.innerHTML = recipeName;
            //  const cardTime = document.getElementsByClassName("cardTime")       
            //   cardTime.innerHTML = recipeTime;
    
            //  main.innerHTML = card
             
    
                let recipeCard = document.createElement("a");
                recipeCard.classList.add("cooking_recipe");
                mainGrid.appendChild(recipeCard);
        
                let imgFood = document.createElement("div");
                imgFood.classList.add("img_food","a");
                recipeCard.appendChild(imgFood);
    
                let titleRecipes = document.createElement("div");
                    titleRecipes.classList.add("recipe_title","d");
                let cardName = document.createElement("h2");
                    cardName.classList.add("Card_name")
                let timeContainer = document.createElement("div");
                    timeContainer.classList.add("time_container");
                let cardIcon = document.createElement("i");
                    cardIcon.classList.add("far", "fa-clock");
                let cardTime = document.createElement("p");
                    cardTime.classList.add("card_time")
                recipeCard.appendChild(titleRecipes);
                titleRecipes.appendChild(cardName);
                titleRecipes.appendChild(timeContainer);
                timeContainer.appendChild(cardIcon);
                timeContainer.appendChild(cardTime);
                cardName.innerText = recipeName;
                cardTime.innerText = recipeTime + 'min';
        
                let cardStep =  document.createElement("div")
                cardStep.classList.add("card_step","c");
                let cardStepText = document.createElement("p");
                cardStepText.classList.add("cardStepText");
                recipeCard.appendChild(cardStep);
                cardStep.appendChild(cardStepText)
                cardStepText.innerText = recipeStep;
    
    
                let cardingredient =  document.createElement("div");
                cardingredient.classList.add("card_ingredients","b");
                recipeCard.appendChild(cardingredient);
                    for(var j =0 ; j < recipesIngredients.length ;j++){
                        let cardIngredientList = document.createElement("p");
                        cardIngredientList.classList.add("card_ingredientList");
                        cardingredient.appendChild(cardIngredientList);
                        if(recipesIngredients[j].unit != null ){
                        cardIngredientList.innerText = recipesIngredients[j].ingredient +" : "+ recipesIngredients[j].quantity + " " + recipesIngredients[j].unit ;
                        } else {
                            cardIngredientList.innerText = recipesIngredients[j].ingredient +" : "+ recipesIngredients[j].quantity 
                        }
                    }
                }
            }
        }
    }
    