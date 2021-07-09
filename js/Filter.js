 //**************** importe les tableaux ingrédients, appareils et ustensiles  dans les filtres ****************

 const FilterIngredients = document.getElementById("filterIngredients");
 const IngredientChevronDown =  document.getElementById("chevronIngredient-down");
 const IngredientChevronUp =  document.getElementById("chevronIngredient-up");
 const DivIngredient = document.getElementById("IngredientsArray");

 const FilterAppliances = document.getElementById("filterAppliances");
 const ApplianceChevronDown =  document.getElementById("chevronAppliance-down");
 const ApplianceChevronUp =  document.getElementById("chevronAppliance-up");
 const DivAppliance = document.getElementById("AppliancesArray");

 const FilterUstensils = document.getElementById("filterUstensils");
 const UstensilChevronDown =  document.getElementById("chevronUstensil-down");
 const UstensilChevronUp =  document.getElementById("chevronUstensil-up");
 const DivUstensil = document.getElementById("UstensilsArray");

//  const FilterAppliance = document.querySelector("li.filter2");
//  const FilterUstensil = document.querySelector("li.filter3");


 //----- montre les Div de IngredientArray -----

 IngredientChevronDown.addEventListener("click", DisplayIngredientArray)
 function DisplayIngredientArray (){

    DivIngredient.classList.remove("hidden")
    IngredientChevronDown.classList.add("hidden");
    IngredientChevronUp.classList.remove("hidden");

    for (var i = 0 ; i < ingredientArray.length; i++){
        let IndexIngredient = document.createElement("p");
        DivIngredient.appendChild(IndexIngredient);
        IndexIngredient.classList.add("TextFilter");
        IndexIngredient.innerText = ingredientArray[i];
    }
    FilterIngredients.classList.add("activefilter")
}

 //----- cache les Div de IngredientArray -----

IngredientChevronUp.addEventListener("click", RemoveIngredientArray)
function RemoveIngredientArray (){
    IngredientChevronUp.classList.add("hidden");
    IngredientChevronDown.classList.remove("hidden");
    DivIngredient.classList.add("hidden");
    FilterIngredients.classList.remove("activefilter");
    while (DivIngredient.firstChild) {
        DivIngredient.removeChild(DivIngredient.firstChild);
    }
 }
 
 //----- montre les Div de ApplianceArray -----

 ApplianceChevronDown.addEventListener("click", DisplayApplianceArray)
 function DisplayApplianceArray (){

    DivAppliance.classList.remove("hidden")
    ApplianceChevronDown.classList.add("hidden");
    ApplianceChevronUp.classList.remove("hidden");

    for (var i = 0 ; i < applianceArray.length; i++){
        let IndexAppliance = document.createElement("p");
        DivAppliance.appendChild(IndexAppliance);
        IndexAppliance.classList.add("TextFilter");
        IndexAppliance.innerText = applianceArray[i];
    }
    FilterAppliances.classList.add("activefilter")
}

 //----- cache les Div de ApplianceArray -----

ApplianceChevronUp.addEventListener("click", RemoveApplianceArray)
function RemoveApplianceArray (){
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
 function DisplayUstensilArray (){

    DivUstensil.classList.remove("hidden")
    UstensilChevronDown.classList.add("hidden");
    UstensilChevronUp.classList.remove("hidden");

    for (var i = 0 ; i < ustensilArray.length; i++){
        let IndexUstensil = document.createElement("p");
        DivUstensil.appendChild(IndexUstensil);
        IndexUstensil.classList.add("IngredientText");
        IndexUstensil.innerText = ustensilArray[i];
    }
    FilterUstensils.classList.add("activefilter")
}

 //----- cache les Div de UstensilArray -----

UstensilChevronUp.addEventListener("click", RemoveUstensilArray)
function RemoveUstensilArray (){
    UstensilChevronUp.classList.add("hidden");
    UstensilChevronDown.classList.remove("hidden");
    DivUstensil.classList.add("hidden");
    FilterUstensils.classList.remove("activefilter");
    while (DivUstensil.firstChild) {
        DivUstensil.removeChild(DivUstensil.firstChild);
    }
 }


