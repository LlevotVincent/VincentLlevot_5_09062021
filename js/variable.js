//***************************************************************************
//******************* variable pour la barre de recherche *******************
//***************************************************************************

const searchBar = document.getElementById("searchbar__text");
const searchIcon = document.getElementsByClassName(".fa-search")
const mainGrid = document.getElementById("main_grid");

var elementArraySearchBar = [];
let ingredientArrayFilter = [];
let applianceArrayFilter = [];
let ustensilArrayFilter = [];

var elementArrayFilter = [];
var recipeFindSearchBar = [];
var recipesFind = [];

let ingredientArray = [];
let applianceArray = [];
let ustensilArray = [];
// createElementArray();

//***************************************************************************
//************************ variable pour les filtres ************************
//***************************************************************************

const filterIngredients = document.getElementById("filterIngredients");
const ingredientChevronDown = document.getElementById("chevronIngredient-down");
const ingredientChevronUp = document.getElementById("chevronIngredient-up");
const divIngredient = document.getElementById("IngredientsArray");
const inputIngredientsFilter = document.getElementById("ingredients__filter");

var ingredientResult = false;
var applianceResult = false;
var ustensilResult = false;
let firstFind = false

const filterAppliances = document.getElementById("filterAppliances");
const applianceChevronDown = document.getElementById("chevronAppliance-down");
const applianceChevronUp = document.getElementById("chevronAppliance-up");
const divAppliance = document.getElementById("AppliancesArray");
const inputApplianceFilter = document.getElementById("appliances__filter");

const filterUstensils = document.getElementById("filterUstensils");
const ustensilChevronDown = document.getElementById("chevronUstensil-down");
const ustensilChevronUp = document.getElementById("chevronUstensil-up");
const divUstensil = document.getElementById("UstensilsArray");
const inputustensilsFilter = document.getElementById("ustensils__filter");

const resultFilter = document.getElementById("tagFilterResult");

//***************************************************************************
//***************************************************************************
//*************************  créer la carte recette *************************
//***************************************************************************
//***************************************************************************
let recipeCard
let cardName
recipesFind = [].concat(recipes)

// console.log(recipesFind)

function CreateCard() {
    while (mainGrid.firstChild) {
        mainGrid.removeChild(mainGrid.firstChild);
    }
    for (var i = 0; i < recipesFind.length; i++) {
        var recipeName = recipesFind[i].name;
        var recipeTime = recipesFind[i].time;
        var recipeStep = recipesFind[i].description;
        var recipesIngredients = recipesFind[i].ingredients;

            recipeCard = document.createElement("a");
            recipeCard.href= "#"
            recipeCard.classList.add("cooking_recipe");
            mainGrid.appendChild(recipeCard);

            let imgFood = document.createElement("div");
            imgFood.classList.add("img_food", "a");
            recipeCard.appendChild(imgFood);

            let titleRecipes = document.createElement("div");
            titleRecipes.classList.add("recipe_title", "d");
            cardName = document.createElement("h2");
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
                if(recipesIngredients[j].quantity == null) {
                    cardIngredientList.innerText = recipesIngredients[j].ingredient
                 }
                } else {
                    cardIngredientList.innerText = recipesIngredients[j].ingredient + " : " + recipesIngredients[j].quantity + " " + recipesIngredients[j].unit;
                }
            }
        }

    }



    CreateCard();