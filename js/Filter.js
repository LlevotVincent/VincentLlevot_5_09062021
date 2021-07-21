//***************************************************************************
//***************************************************************************
//****************** importe les tableaux pour les filtres ****************** 
//***************************************************************************
//***************************************************************************

const filterIngredients = document.getElementById("filterIngredients");
const ingredientChevronDown = document.getElementById("chevronIngredient-down");
const ingredientChevronUp = document.getElementById("chevronIngredient-up");
const divIngredient = document.getElementById("IngredientsArray");
const inputIngredientsFilter = document.getElementById("ingredients__filter");

var ingredientResult = false;
var applianceResult = false;
var ustensilResult = false;


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
//*************************  filtre des Ingredients ************************* 
//***************************************************************************
//***************************************************************************

ingredientChevronDown.addEventListener("click", DisplayIngredientArray)
inputIngredientsFilter.addEventListener("click", DisplayIngredientArray)

// ----- Affiche la Div de ingredient Array by filter -----

function DisplayIngredientArray() {

    divIngredient.classList.remove("hidden")
    ingredientChevronDown.classList.add("hidden");
    ingredientChevronUp.classList.remove("hidden");
    ingredientResult = false;


    for (var i = 0; i < ingredientArray.length; i++) {
        let indexIngredient = document.createElement("p");
        divIngredient.appendChild(indexIngredient);
        indexIngredient.classList.add("TextFilter");
        indexIngredient.innerText = ingredientArray[i];
        filterIngredients.classList.add("activefilter");
        indexIngredient.addEventListener("click", tagOpen);
        indexIngredient.addEventListener("click", RecipesToFind);
        inputIngredientsFilter.addEventListener("input", function () {
            let inputIngredient = inputIngredientsFilter.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            let textIngredient = document.querySelector("p.TextFilter")
            if (!indexIngredient.textContent.includes(inputIngredient)) {
                divIngredient.removeChild(indexIngredient)
            }
            if (indexIngredient.textContent.includes(inputIngredient)) {
                divIngredient.appendChild(indexIngredient)
            }
        })
    }
    return ingredientResult = true; //utilisé pour changer la couleur du tag
}

// ----- cache les Div de IngredientArray ----- 

ingredientChevronUp.addEventListener("click", CloseIngredientArray)
divIngredient.addEventListener("mouseleave", CloseIngredientArray)
function CloseIngredientArray() {
    ingredientChevronUp.classList.add("hidden");
    ingredientChevronDown.classList.remove("hidden");
    divIngredient.classList.add("hidden");
    filterIngredients.classList.remove("activefilter");
    while (divIngredient.firstChild) {
        divIngredient.removeChild(divIngredient.firstChild);
    }
}

//***************************************************************************
//***************************************************************************
//**************************  filtre des Appareils ************************** 
//***************************************************************************
//***************************************************************************

applianceChevronDown.addEventListener("click", DisplayApplianceArray)
inputApplianceFilter.addEventListener("click", DisplayApplianceArray)

//----- montre les Div de ApplianceArray -----

function DisplayApplianceArray() {

    divAppliance.classList.remove("hidden")
    applianceChevronDown.classList.add("hidden");
    applianceChevronUp.classList.remove("hidden");
    applianceResult = false;

    for (var i = 0; i < applianceArray.length; i++) {
        let indexAppliance = document.createElement("p");
        divAppliance.appendChild(indexAppliance);
        indexAppliance.classList.add("TextFilter");
        indexAppliance.innerText = applianceArray[i];
        filterAppliances.classList.add("activefilter");
        indexAppliance.addEventListener("click", tagOpen);
        indexAppliance.addEventListener("click", RecipesToFind);
        inputApplianceFilter.addEventListener("input", function () {
            let inputAppliance = inputApplianceFilter.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            if (!indexAppliance.textContent.includes(inputAppliance)) {
                divAppliance.removeChild(indexAppliance)
            }
            if (indexAppliance.textContent.includes(inputAppliance)) {
                divAppliance.appendChild(indexAppliance)
            }
        })
    }
    return applianceResult = true; //utilisé pour changer la couleur du tag
}

//----- cache les Div de ApplianceArray -----

applianceChevronUp.addEventListener("click", CloseAppliancesArray);
divAppliance.addEventListener("mouseleave", CloseAppliancesArray);
function CloseAppliancesArray() {
    applianceChevronUp.classList.add("hidden");
    applianceChevronDown.classList.remove("hidden");
    divAppliance.classList.add("hidden");
    filterAppliances.classList.remove("activefilter");
    while (divAppliance.firstChild) {
        divAppliance.removeChild(divAppliance.firstChild);
    }
}

//***************************************************************************
//***************************************************************************
//*************************  filtre des Ustensiles ************************** 
//***************************************************************************
//***************************************************************************

ustensilChevronDown.addEventListener("click", DisplayUstensilArray)
inputustensilsFilter.addEventListener("click", DisplayUstensilArray)

//----- montre les Div de UstensilArray -----

function DisplayUstensilArray() {

    divUstensil.classList.remove("hidden")
    ustensilChevronDown.classList.add("hidden");
    ustensilChevronUp.classList.remove("hidden");
    ustensilResult = false;

    for (var i = 0; i < ustensilArray.length; i++) {
        let indexUstensil = document.createElement("p");
        divUstensil.appendChild(indexUstensil);
        indexUstensil.classList.add("TextFilter");
        indexUstensil.innerText = ustensilArray[i];
        filterUstensils.classList.add("activefilter");
        indexUstensil.addEventListener("click", tagOpen);
        indexUstensil.addEventListener("click", RecipesToFind);
        inputustensilsFilter.addEventListener("keyup", function () {
            let inputUstensils = inputustensilsFilter.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (!indexUstensil.textContent.includes(inputUstensils)) {
                divUstensil.removeChild(indexUstensil)
            }
            if (indexUstensil.textContent.includes(inputUstensils)) {
                divUstensil.appendChild(indexUstensil)
            }
        })
    }
    return ustensilResult = true; //utilisé pour changer la couleur du tag
}

//----- cache les Div de UstensilArray -----

ustensilChevronUp.addEventListener("click", CloseUstensilsArray);
divUstensil.addEventListener("mouseleave", CloseUstensilsArray);
function CloseUstensilsArray() {
    ustensilChevronUp.classList.add("hidden");
    ustensilChevronDown.classList.remove("hidden");
    divUstensil.classList.add("hidden");
    filterUstensils.classList.remove("activefilter");
    while (divUstensil.firstChild) {
        divUstensil.removeChild(divUstensil.firstChild);
    }
}

//***************************************************************************
//***************************************************************************
//****************************  creation du tag *****************************
//***************************************************************************
//***************************************************************************

function tagOpen() {

    let tagDiv = document.createElement("div");
    let tagText = document.createElement("p");
    let tagIcon = document.createElement("i");
    resultFilter.appendChild(tagDiv);
    tagDiv.appendChild(tagText);
    tagDiv.appendChild(tagIcon);
    this.classList.add("TextFilter_active");
    if (ingredientResult == true) {
        tagDiv.classList.add("tagFilter", "filter1");
        ingredientResult = false;
    } else if (applianceResult == true) {
        tagDiv.classList.add("tagFilter", "filter2");
        applianceResult = false;
    } else if (ustensilResult == true) {
        tagDiv.classList.add("tagFilter", "filter3");
        ustensilResult = false;
    }
    tagText.classList.add("tagText")
    tagIcon.classList.add("far", "fa-times-circle");
    tagText.innerText = this.textContent;

    CloseIngredientArray();
    CloseAppliancesArray();
    CloseUstensilsArray();


    // ----- referme le tag -----
    tagIcon.addEventListener("click", function () {
        tagDiv.remove()
        // tagText.innerText.classList.remove("TextFilter_active");
        while (mainGrid.firstChild) {
            mainGrid.removeChild(mainGrid.firstChild);
        }
    })
}


