//***************************************************************************
//***************************************************************************
//*******************  affiche les recettes disponibles  ********************
//***************************************************************************
//***************************************************************************

recipesFind = []
recipeFindSearchBar = []

function RecipesToFind() {

    recipeFindSearchBar = []

    if (firstFind == true && recipesFind.length > 0) {
        for (var p = 0; p < recipesFind.length; p++) {
            for (var k = 0; k < recipes.length; k++) {
                let recipeName = recipes[k].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                let ingredients = recipes[k].ingredients
                if (recipesFind[p] === recipeName) {
                    for (var q = 0; q < ingredients.length; q++) {
                        let ingredient = ingredients[q].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        for (var r = 0; r < elementArrayFilter.length; r++) {
                            let lastIndex = elementArrayFilter[elementArrayFilter.length-1];
                            if (ingredient.includes(lastIndex)) {
                                if (!recipeFindSearchBar.includes(recipeName)) {
                                    recipeFindSearchBar.push(recipeName)
                                }
                            }
                            let appliances = recipes[k].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                            if (appliances.includes(lastIndex)) {
                                if (!recipeFindSearchBar.includes(recipeName)) {
                                    recipeFindSearchBar.push(recipeName);
                                }
                            }
                            let ustensils = recipes[k].ustensils;
                            for (var l = 0; l < ustensils.length; l++) {
                                let ustensil = ustensils[l].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                                if (ustensil.includes(lastIndex)) {
                                    if (!recipeFindSearchBar.includes(recipeName)) {
                                        recipeFindSearchBar.push(recipeName);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        recipesFind = [].concat(recipeFindSearchBar)
        console.log(recipesFind)
        CreateCard(recipesFind);
        return

    }
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
            let recipeName = recipes[j].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            let ingredients = recipes[j].ingredients
            let ustensils = recipes[j].ustensils;

            for (var k = 0; k < ingredients.length; k++) {
                let ingredient = ingredients[k].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (ingredient.includes(this.textContent)) {
                    recipesFind.push(recipeName);
                }
            }
            let appliances = recipes[j].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (appliances.includes(this.textContent)) {
                recipesFind.push(recipeName);
            }
            for (var l = 0; l < ustensils.length; l++) {
                let ustensil = ustensils[l].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (ustensil.includes(this.textContent)) {
                    recipesFind.push(recipeName);
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
            var recipeName = recipes[i].name;
            var recipeTime = recipes[i].time;
            var recipeStep = recipes[i].description
            var recipesIngredients = recipes[i].ingredients;

            if (recipesFind[k] === recipeName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {

                let recipeCard = document.createElement("a");
                recipeCard.href = "#"
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
                    if (recipesIngredients[j].unit == null) {
                        cardIngredientList.innerText = recipesIngredients[j].ingredient + " : " + recipesIngredients[j].quantity
                        if (recipesIngredients[j].quantity == null) {
                            cardIngredientList.innerText = recipesIngredients[j].ingredient
                        }
                    } else {
                        cardIngredientList.innerText = recipesIngredients[j].ingredient + " : " + recipesIngredients[j].quantity + " " + recipesIngredients[j].unit;
                    }
                }
            }
        }
    }
}


initialRecipes()
function initialRecipes() {
recipesFind = [];
    for (var i = 0; i < recipes.length; i++) {
        let recipeName = recipes[i].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        recipesFind.push(recipeName)
        CreateCard(recipeName)
    }
}