//***************************************************************************
//***************************************************************************
//*******************  affiche les recettes disponibles  ********************
//***************************************************************************
//***************************************************************************


function RecipesToFind() {
    recipeFindSearchBar = []
    recipesFind = [];
    if (elementArraySearchBar.length > 0) {
        for (var k = 0; k < recipes.length; k++) {
            let recipeName = recipes[k].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            let ingredients = recipes[k].ingredients;
            for (var i = 0; i < elementArraySearchBar.length; i++) {
                for (var j = 0; j < ingredients.length; j++) {
                    let ingredient = ingredients[j].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (ingredient.includes(elementArraySearchBar[i])) {
                        if (!recipeFindSearchBar.includes(recipeName)) {
                                recipeFindSearchBar.push(recipeName);
                        }
                    }
                }
                if (recipeName.includes(elementArraySearchBar[i])) {
                    if (!recipeFindSearchBar.includes(recipeName)) {
                        recipeFindSearchBar.push(recipeName);
                    }
                }
                let appliances = recipes[k].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (appliances.includes(elementArraySearchBar[i])) {
                    if (!recipeFindSearchBar.includes(recipeName)) {
                        recipeFindSearchBar.push(recipeName);
                    }
                }
                let ustensils = recipes[k].ustensils;
                for (var j = 0; j < ustensils.length; j++) {
                    let ustensil = ustensils[j].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (ustensil.includes(elementArraySearchBar[i])) {
                        if (!recipeFindSearchBar.includes(recipeName)) {
                            recipeFindSearchBar.push(recipeName);
                        }
                    }
                }
            }
        }

        recipesFind = [].concat(recipeFindSearchBar)
    } else {
        for (var j = 0; j < recipes.length; j++) {
            let recipesName = recipes[j].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            let ingredients = recipes[j].ingredients
            let ustensils = recipes[j].ustensils;
    
            for (var k = 0; k < ingredients.length; k++) {
                let ingredient = ingredients[k].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (ingredient.includes(this.textContent)) {
                    recipesFind.push(recipesName);
                }
            }
            let appliances = recipes[j].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (appliances.includes(this.textContent)) {
                recipesFind.push(recipesName);
            }
            for (var l = 0; l < ustensils.length; l++) {
                let ustensil = ustensils[l].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (ustensil.includes(this.textContent)) {
                    recipesFind.push(recipesName);
                }
            }
        }
    }
    console.log("liste des éléments filtrés");
    console.log(recipesFind);
    CreateCard(recipesFind);
}

//***************************************************************************
//***************************************************************************
//*************************  créer la carte recette *************************
//***************************************************************************
//***************************************************************************

function CreateCard() {

    //--- reinitialise l affichage ---
    while (mainGrid.firstChild) {
        mainGrid.removeChild(mainGrid.firstChild);
    }

    for (var k = 0; k < recipesFind.length; k++) {
        for (var i = 0; i < recipes.length; i++) {
            var recipeName = recipes[i].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");;
            var recipeTime = recipes[i].time;
            var recipeStep = recipes[i].description
            var recipesIngredients = recipes[i].ingredients;

            if (recipesFind[k] === recipeName) {
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
                imgFood.classList.add("img_food", "a");
                recipeCard.appendChild(imgFood);

                let titleRecipes = document.createElement("div");
                titleRecipes.classList.add("recipe_title", "d");
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

                let cardStep = document.createElement("div")
                cardStep.classList.add("card_step", "c");
                let cardStepText = document.createElement("p");
                cardStepText.classList.add("cardStepText");
                recipeCard.appendChild(cardStep);
                cardStep.appendChild(cardStepText)
                cardStepText.innerText = recipeStep;


                let cardingredient = document.createElement("div");
                cardingredient.classList.add("card_ingredients", "b");
                recipeCard.appendChild(cardingredient);
                for (var j = 0; j < recipesIngredients.length; j++) {
                    let cardIngredientList = document.createElement("p");
                    cardIngredientList.classList.add("card_ingredientList");
                    cardingredient.appendChild(cardIngredientList);
                    if (recipesIngredients[j].unit != null) {
                        cardIngredientList.innerText = recipesIngredients[j].ingredient + " : " + recipesIngredients[j].quantity + " " + recipesIngredients[j].unit;
                    } else {
                        cardIngredientList.innerText = recipesIngredients[j].ingredient + " : " + recipesIngredients[j].quantity
                    }
                }
            }
        }
    }
}
