//**************** importe les tableaux ingrédients, appareils et ustensiles  dans les filtres ****************

const FilterIngredients = document.getElementById("filterIngredients");
const IngredientChevronDown = document.getElementById("chevronIngredient-down");
const IngredientChevronUp = document.getElementById("chevronIngredient-up");
const DivIngredient = document.getElementById("IngredientsArray");
const ResultFilter = document.getElementById("resultfilterbox");
const InputIngredientsFilter = document.getElementById("ingredients__filter");
let ingredientArrayResult = [];
// let IndexIngredient = document.createElement("p");
// let TagDiv = document.createElement("div");
// let TagText = document.createElement("p");
// let TagIcon = document.createElement("i")

const FilterAppliances = document.getElementById("filterAppliances");
const ApplianceChevronDown = document.getElementById("chevronAppliance-down");
const ApplianceChevronUp = document.getElementById("chevronAppliance-up");
const DivAppliance = document.getElementById("AppliancesArray");

const InputAppliancesFilter = document.getElementById("appliances__filter");

const FilterUstensils = document.getElementById("filterUstensils");
const UstensilChevronDown = document.getElementById("chevronUstensil-down");
const UstensilChevronUp = document.getElementById("chevronUstensil-up");
const DivUstensil = document.getElementById("UstensilsArray");

//  const FilterAppliance = document.querySelector("li.filter2");
//  const FilterUstensil = document.querySelector("li.filter3");


//*************************  montre la Div de IngredientArray ************************* 

IngredientChevronDown.addEventListener("click", DisplayIngredientArray)
// InputIngredientsFilter.addEventListener("input", DisplayIngredientArray)

// ----- Affiche la Div de ingredient Array -----

function DisplayIngredientArray() {
    elementArrayFilter = [];
    DivIngredient.classList.remove("hidden")
    IngredientChevronDown.classList.add("hidden");
    IngredientChevronUp.classList.remove("hidden");

    for (var i = 0; i < ingredientArray.length; i++) {
        let IndexIngredient = document.createElement("p");
        DivIngredient.appendChild(IndexIngredient);
        IndexIngredient.classList.add("TextFilter");
        IndexIngredient.innerText = ingredientArray[i];
        FilterIngredients.classList.add("activefilter");
        IndexIngredient.addEventListener("click", tagOpen);
        IndexIngredient.addEventListener("click", DisplayRecipesByFilter);

        InputIngredientsFilter.addEventListener("keyup", function () {
            if (!IndexIngredient.textContent.includes(InputIngredientsFilter.value)) {
                DivIngredient.removeChild(IndexIngredient)
            }
        })
    }
}

// ----- cree le tag ingredient -----

function tagOpen() {
    let TagDiv = document.createElement("div");
    let TagText = document.createElement("p");
    let TagIcon = document.createElement("i")
    ResultFilter.appendChild(TagDiv);
    TagDiv.appendChild(TagText);
    TagDiv.appendChild(TagIcon);
    this.classList.add("TextFilter_active");
    TagDiv.classList.add("TagFilter", "TagFilter1");
    TagText.classList.add("TagText")
    TagIcon.classList.add("far", "fa-times-circle");
    TagText.innerText = this.textContent;
    CloseIngredientArray()
    // ----- referme le tag -----
    TagIcon.addEventListener("click", function () {
        TagDiv.remove()
        this.classList.remove("TextFilter_active");
        while (mainGrid.firstChild) {
            mainGrid.removeChild(mainGrid.firstChild);
        }
    })
}

// ----- affiche les recettes disponibles pour le tag -----
function DisplayRecipesByFilter() {

    for (var i = 0; i < recipesFind.length; i++) {
        for (var j = 0; j < recipes.length; j++) {
            let recipesName = recipes[j].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            let ingredients = recipes[j].ingredients
            for (var k = 0; k < ingredients.length; k++) {
                let ingredient = ingredients[k].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (recipesFind[i] == recipesName) {
                    if (ingredient.includes(this.textContent)) {
                        elementArrayFilter.push(recipesName);
                        console.log("liste des éléments filtrés");
                        console.log(elementArrayFilter);
                        RecipesToFind(elementArrayFilter);
                    }
                }
            }
        }
    }
}
// ----- cache les Div de IngredientArray ----- 

IngredientChevronUp.addEventListener("click", CloseIngredientArray)
DivIngredient.addEventListener("mouseleave", CloseIngredientArray)
function CloseIngredientArray() {
    IngredientChevronUp.classList.add("hidden");
    IngredientChevronDown.classList.remove("hidden");
    DivIngredient.classList.add("hidden");
    FilterIngredients.classList.remove("activefilter");
    while (DivIngredient.firstChild) {
        DivIngredient.removeChild(DivIngredient.firstChild);
    }
}


//******************** montre les Div de ApplianceArray ********************

ApplianceChevronDown.addEventListener("click", DisplayApplianceArray)
// InputApplianceFilter.addEventListener("input", DisplayApplianceArray)

function DisplayApplianceArray() {

    DivAppliance.classList.remove("hidden")
    ApplianceChevronDown.classList.add("hidden");
    ApplianceChevronUp.classList.remove("hidden");

    for (var i = 0; i < applianceArray.length; i++) {
        let IndexAppliance = document.createElement("p");
        DivAppliance.appendChild(IndexAppliance);
        IndexAppliance.classList.add("TextFilter");
        IndexAppliance.innerText = applianceArray[i];
        FilterAppliances.classList.add("activefilter");
        IndexAppliance.addEventListener("click", tagOpen);
        IndexAppliance.addEventListener("click", DisplayRecipesByFilter);
        InputAppliancesFilter.addEventListener("keyup", function () {
            if (!IndexAppliance.textContent.includes(InputAppliancesFilter.value)) {
                DivAppliance.removeChild(IndexAppliance)
            }
        })
    }
}

//----- cache les Div de ApplianceArray -----

ApplianceChevronUp.addEventListener("click", RemoveApplianceArray)
function RemoveApplianceArray() {
    ApplianceChevronUp.classList.add("hidden");
    ApplianceChevronDown.classList.remove("hidden");
    DivAppliance.classList.add("hidden");
    FilterAppliances.classList.remove("activefilter");
    while (DivAppliance.firstChild) {
        DivAppliance.removeChild(DivAppliance.firstChild);
    }
}

//----- montre les Div de UstensilArray -----

UstensilChevronDown.addEventListener("click", DisplayUstensilArray)
function DisplayUstensilArray() {

    DivUstensil.classList.remove("hidden")
    UstensilChevronDown.classList.add("hidden");
    UstensilChevronUp.classList.remove("hidden");

    for (var i = 0; i < ustensilArray.length; i++) {
        let IndexUstensil = document.createElement("p");
        DivUstensil.appendChild(IndexUstensil);
        IndexUstensil.classList.add("IngredientText");
        IndexUstensil.innerText = ustensilArray[i];

        // // Pour filtrer les recettes a afficher suivant l input. Ne fonctionne pas
        // InputIngredientsFilter.addEventListener("change", function () {
        //     console.log("ca marche")
        //     if (!IndexIngredient.textContent.includes(InputIngredientsFilter.value)) {
        //         console.log("j'ai trouvé un ingredient")
        //         DivIngredient.removeChild(IndexIngredient)
        //     }
        // })
    }
    FilterUstensils.classList.add("activefilter")
}

//----- cache les Div de UstensilArray -----

UstensilChevronUp.addEventListener("click", RemoveUstensilArray)
function RemoveUstensilArray() {
    UstensilChevronUp.classList.add("hidden");
    UstensilChevronDown.classList.remove("hidden");
    DivUstensil.classList.add("hidden");
    FilterUstensils.classList.remove("activefilter");
    while (DivUstensil.firstChild) {
        DivUstensil.removeChild(DivUstensil.firstChild);
    }
}

