 //**************** importe les tableaux ingrédients, appareils et ustensiles  dans les filtres ****************

 const FilterIngredients = document.getElementById("filterIngredients");
 const IngredientChevronDown =  document.getElementById("chevronIngredient-down");
 const IngredientChevronUp =  document.getElementById("chevronIngredient-up");
 const DivIngredient = document.getElementById("IngredientsArray");
 const ResultFilter = document.getElementById("resultfilterbox");
 const InputFilter = document.getElementById("ingredients__filter")
 let ingredientArrayResult = [];
 

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


 //*************************  montre la Div de IngredientArray ************************* 

 IngredientChevronDown.addEventListener("click", DisplayIngredientArray)

 function DisplayIngredientArray (){
    elementArrayFilter = [];
    //montre la Div de ingredient Array
    DivIngredient.classList.remove("hidden")
    IngredientChevronDown.classList.add("hidden");
    IngredientChevronUp.classList.remove("hidden");

    for (var i = 0 ; i < ingredientArray.length; i++){
        let IndexIngredient = document.createElement("p");
        DivIngredient.appendChild(IndexIngredient);
        IndexIngredient.classList.add("TextFilter");
        IndexIngredient.innerText = ingredientArray[i];
        FilterIngredients.classList.add("activefilter");

        //cree le tag ingredient
        let IngredientResultFilter = document.createElement("div");
        let ResultFilterText =  document.createElement("p");
        let ResultFilterIcon = document.createElement("i")
            IndexIngredient.addEventListener("click", function(){
                ResultFilter.appendChild(IngredientResultFilter);
                IngredientResultFilter.appendChild(ResultFilterText);
                IngredientResultFilter.appendChild(ResultFilterIcon);
                IndexIngredient.classList.add("TextFilter_active");
                IngredientResultFilter.classList.add("Filter","filter1");
                ResultFilterText.classList.add("result__text")
                ResultFilterIcon.classList.add("far", "fa-times-circle");
                ResultFilterText.innerText = IndexIngredient.textContent;

        // Pour filtrer les recettes a afficher suivant l input. Ne fonctionne pas
        // for(var i = 0 ; i <recipes.length; i++){ 
        //     let recipesName = recipes[i].name;
        //     let ingredients = recipes[i].ingredients;
        //     for (var k = 0 ; k < recipesFilter.length; k++){
        //         if (recipesFilter[k].includes(recipesName)){
        //             if (ingredients.includes(IndexIngredient.textContent)){
        //                 elementArrayFilter.splice(IndexIngredient.textContent)
        //             }
        //         }
        //     }
        // }
                elementArrayFilter.push(IndexIngredient.textContent);
                console.log("liste des éléments filtrés");
                console.log(elementArrayFilter);
                RecipesFilter(elementArrayFilter);     
            })

        //referme le tag
            ResultFilterIcon.addEventListener("click", function(){
                IngredientResultFilter.remove();
                IndexIngredient.classList.remove("TextFilter_active");
                while (mainGrid.firstChild) {
                    mainGrid.removeChild(mainGrid.firstChild);}
                // ingredientArrayResult.splice(IndexIngredient.textContent);
                // console.log(ingredientArrayResult)
            }) 
    }   
}

        // ingredients__filter.addEventListener("change", function (){
        //     if(IndexIngredient.includes(InputFilter)){
        //         DivIngredient.removeChild
        //     }
        // })





















 //************************* cache les Div de IngredientArray ************************* 

IngredientChevronUp.addEventListener("click", RemoveIngredientArray)
DivIngredient.addEventListener("mouseleave", RemoveIngredientArray)
function RemoveIngredientArray (){
    IngredientChevronUp.classList.add("hidden");
    IngredientChevronDown.classList.remove("hidden");
    DivIngredient.classList.add("hidden");
    FilterIngredients.classList.remove("activefilter");
    while (DivIngredient.firstChild) {
        DivIngredient.removeChild(DivIngredient.firstChild);
    }
 }
 DivIngredient
 
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


