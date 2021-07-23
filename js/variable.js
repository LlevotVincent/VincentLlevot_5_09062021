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


