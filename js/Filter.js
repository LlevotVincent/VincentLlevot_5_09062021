//**************** importe les tableaux ingrédients, appareils et ustensiles  dans les filtres ****************

const FilterIngredients = document.getElementById("filterIngredients");
const IngredientChevronDown = document.getElementById("chevronIngredient-down");
const IngredientChevronUp = document.getElementById("chevronIngredient-up");
const DivIngredient = document.getElementById("IngredientsArray");
const ResultFilter = document.getElementById("resultfilterbox");
const InputIngredientsFilter = document.getElementById("ingredients__filter");
// let ingredientArrayResult = [];
// let IndexIngredient = document.createElement("p");
// let TagDiv = document.createElement("div");
// let TagText = document.createElement("p");
// let TagIcon = document.createElement("i")
var ingredientResult = false;
var applianceResult = false;
var ustensilResult = false;


const FilterAppliances = document.getElementById("filterAppliances");
const ApplianceChevronDown = document.getElementById("chevronAppliance-down");
const ApplianceChevronUp = document.getElementById("chevronAppliance-up");
const DivAppliance = document.getElementById("AppliancesArray");
const InputAppliancesFilter = document.getElementById("appliances__filter");

const FilterUstensils = document.getElementById("filterUstensils");
const UstensilChevronDown = document.getElementById("chevronUstensil-down");
const UstensilChevronUp = document.getElementById("chevronUstensil-up");
const DivUstensil = document.getElementById("UstensilsArray");
const InputustensilsFilter = document.getElementById("ustensils__filter");




//*************************  montre la Div de IngredientArray ************************* 

IngredientChevronDown.addEventListener("click", DisplayIngredientArray)
InputIngredientsFilter.addEventListener("click", DisplayIngredientArray)


// ----- Affiche la Div de ingredient Array by filter -----

function DisplayIngredientArray() {
    elementArrayFilter = [];
    DivIngredient.classList.remove("hidden")
    IngredientChevronDown.classList.add("hidden");
    IngredientChevronUp.classList.remove("hidden");
    ingredientResult = false;

if(recipesFind.length == 0){
    for (var i = 0; i < ingredientArray.length; i++) {
        let IndexIngredient = document.createElement("p");
        DivIngredient.appendChild(IndexIngredient);
        IndexIngredient.classList.add("TextFilter");
        IndexIngredient.innerText = ingredientArray[i];
        FilterIngredients.classList.add("activefilter");
        IndexIngredient.addEventListener("click", tagOpen);
        IndexIngredient.addEventListener("click", DisplayRecipesByFilter);
        InputIngredientsFilter.addEventListener("input", function () {
            if (!IndexIngredient.textContent.includes(InputIngredientsFilter.value)) {
                DivIngredient.removeChild(IndexIngredient)
            }
            if (IndexIngredient.textContent.includes(InputIngredientsFilter.value)) {
                DivIngredient.appendChild(IndexIngredient)
            }
        })
    
    }
} 
// else {
//     for (var i = 0 ; i <recipesFind.length; i++){ 
//         for(var k = 0 ; k <recipes.length; k++){
//         let recipeName = recipes[k].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//         let ingredients = recipes[k].ingredients;
//         if(recipesFind[i] == recipeName){
//             for (var i = 0; i < ingredientArray.length; i++) {
//                 ingredientArray[i].split(ingredients)

//             let IndexIngredient = document.createElement("p");
//             DivIngredient.appendChild(IndexIngredient);
//             IndexIngredient.classList.add("TextFilter");
//             IndexIngredient.innerText = ingredientArray[i];
//             FilterIngredients.classList.add("activefilter");
//             IndexIngredient.addEventListener("click", tagOpen);
//             IndexIngredient.addEventListener("click", DisplayRecipesByFilter);
//             InputIngredientsFilter.addEventListener("keydown", function () {
//                 if (!IndexIngredient.textContent.includes(InputIngredientsFilter.value)) {
//                     // DivIngredient.removeChild(IndexIngredient)
//                     IndexIngredient.classList.add("hidden")
//                 }
//             })
//         }
//     }
// }
    return ingredientResult = true;
}

// // ----- Affiche la Div de ingredient Array by input -----
// InputIngredientsFilter.addEventListener("input", function (){
//     for (var i = 0; i < ingredientArray.length; i++) {
//         if (ingredientArray[i].includes(InputIngredientsFilter.value)){
//             let IndexIngredient = document.createElement("p");
//             DivIngredient.appendChild(IndexIngredient);
//             IndexIngredient.classList.add("TextFilter");
//             IndexIngredient.innerText = ingredientArray[i];
//             FilterIngredients.classList.add("activefilter");
//         }
//     }
// })




// ----- cache les Div de IngredientArray ----- 

IngredientChevronUp.addEventListener("click", CloseIngredientArray)
// DivIngredient.addEventListener("mouseleave", CloseIngredientArray)
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
    elementArrayFilter = [];
    DivAppliance.classList.remove("hidden")
    ApplianceChevronDown.classList.add("hidden");
    ApplianceChevronUp.classList.remove("hidden");
    applianceResult = false;

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
    return applianceResult = true;
}

//----- cache les Div de ApplianceArray -----

ApplianceChevronUp.addEventListener("click", CloseAppliancesArray);
// DivIngredient.addEventListener("mouseleave", CloseAppliancesArray);
function CloseAppliancesArray() {
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
// InputustensilsFilter.addEventListener("input", DisplayApplianceArray)
function DisplayUstensilArray() {
    elementArrayFilter = [];
    DivUstensil.classList.remove("hidden")
    UstensilChevronDown.classList.add("hidden");
    UstensilChevronUp.classList.remove("hidden");
    ustensilResult = false;

    for (var i = 0; i < ustensilArray.length; i++) {
        let IndexUstensil = document.createElement("p");
        DivUstensil.appendChild(IndexUstensil);
        IndexUstensil.classList.add("TextFilter");
        IndexUstensil.innerText = ustensilArray[i];
        FilterUstensils.classList.add("activefilter");
        IndexUstensil.addEventListener("click", tagOpen);
        IndexUstensil.addEventListener("click", DisplayRecipesByFilter);
        InputustensilsFilter.addEventListener("keyup", function () {
            if (!IndexUstensil.textContent.includes(InputustensilsFilter.value)) {
                DivUstensil.removeChild(IndexUstensil)
            }
        })
    }
    return ustensilResult = true;
}

//----- cache les Div de UstensilArray -----

UstensilChevronUp.addEventListener("click", CloseUstensilsArray);
// DivUstensil.addEventListener("mouseleave", CloseUstensilsArray);
function CloseUstensilsArray() {
    UstensilChevronUp.classList.add("hidden");
    UstensilChevronDown.classList.remove("hidden");
    DivUstensil.classList.add("hidden");
    FilterUstensils.classList.remove("activefilter");
    while (DivUstensil.firstChild) {
        DivUstensil.removeChild(DivUstensil.firstChild);
    }
}

// *********************** cree le tag ingredient ***********************

function tagOpen() {
    let TagDiv = document.createElement("div");
    var TagText = document.createElement("p");
    let TagIcon = document.createElement("i");

    ResultFilter.appendChild(TagDiv);
    TagDiv.appendChild(TagText);
    TagDiv.appendChild(TagIcon);
    this.classList.add("TextFilter_active");
    if(ingredientResult == true){
        TagDiv.classList.add("TagFilter", "filter1");
        ingredientResult = false;
    }else if(applianceResult == true){
        TagDiv.classList.add("TagFilter", "filter2");
        applianceResult = false;
    }else if(ustensilResult == true){
        TagDiv.classList.add("TagFilter", "filter3"); 
        ustensilResult = false;
    }
    TagText.classList.add("TagText")
    TagIcon.classList.add("far", "fa-times-circle");
    TagText.innerText = this.textContent;

    // this.onclick = function (){
    //     this.classList.remove("TextFilter_active");
    //     TagDiv.remove()
    // }
    CloseIngredientArray();
    CloseAppliancesArray();
    CloseUstensilsArray();


    // ----- referme le tag -----
    TagIcon.addEventListener("click", function () {
        TagDiv.remove()
        // TagText.innerText.classList.remove("TextFilter_active");
        while (mainGrid.firstChild) {
            mainGrid.removeChild(mainGrid.firstChild);
        }
    })
}




// *********************** affiche les recettes disponibles pour le tag ***********************
function DisplayRecipesByFilter() {


        for (var j = 0; j < recipes.length; j++) {
            let recipesName = recipes[j].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            let ingredients = recipes[j].ingredients
            let ustensils = recipes[j].ustensils;
 
            for (var k = 0; k < ingredients.length; k++) {
                let ingredient = ingredients[k].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (ingredient.includes(this.textContent)) {
                        elementArrayFilter.push(recipesName);
                    }
            }     
                    let appliances = recipes[j].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (appliances.includes(this.textContent)) {
                        elementArrayFilter.push(recipesName);
                    }
            for(var l = 0 ; l < ustensils.length; l++){
                let ustensil = ustensils[l].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    if (ustensil.includes(this.textContent)) {
                        elementArrayFilter.push(recipesName);
                    }
            }
    //----- affiche le message d'erreur -----
            // afficher un message d erreur si une combinaison est impossible
            //             while (mainGrid.firstChild) {
            //                 mainGrid.removeChild(mainGrid.firstChild);}
            //                 document.getElementById("error-message").classList.remove("hidden")
            //         }
                
        }           
        console.log("liste des éléments filtrés");
        console.log(elementArrayFilter);
        RecipesToFind(elementArrayFilter);

        
    }  

        
    

    




    
    