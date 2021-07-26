//***************************************************************************
//***************************************************************************
//**********  crée les tableaux ingredients appareils et ustensiles *********
//***************************************************************************
//***************************************************************************

    
function createElementArray (){
    ingredientArray = []
    applianceArray = []
    ustensilArray = []
if(recipesFind.length>0){
    for (var l = 0; l < recipesFind.length; l++) {   
    for (var i = 0; i < recipes.length; i++) {
        let ingredients = recipes[i].ingredients;
        let recipeName = recipes[i].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if (recipesFind[l] == recipeName ) {   //-----permet de filtrer la div filtre suivant le resultat barre de recherche
        for (var j = 0; j < ingredients.length; j++){
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
            let ustensils = recipes[i].ustensils;
            for (var k = 0; k < ustensils.length; k++){
                let listOfUstensils = ustensils[k].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (!ustensilArray.includes(listOfUstensils)){
                ustensilArray.push(listOfUstensils);
                ustensilArray.sort();
                }
            }
        }}
    }}
} else {

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
}
    // console.log("liste des ingredients")
    // console.log(ingredientArray);
    // console.log("liste des appareils")
    // console.log(applianceArray);
    // console.log("liste des ustensiles")
    // console.log(ustensilArray);
}
    
//***************************************************************************
//***************************************************************************
//**************  lance la recherche avec la barre de recherche *************
//***************************************************************************
//***************************************************************************


searchBar.addEventListener("input", elementSearchBar);
    
    //**************** trie le tableau element suivant l'input de la barre de recherche ****************
function elementSearchBar(){

    let inputSearchBar = searchBar.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let inputSearchBarSplit = inputSearchBar.split(" ");
    elementArraySearchBar = [];
    ingredientArrayFilter = [];
    applianceArrayFilter = [];
    ustensilArrayFilter = [];
    createElementArray ()
    if(inputSearchBar.length >2 ){
        firstFind = false
        document.getElementById("error-message").classList.add("hidden")
        for (var i = 0 ; i < ingredientArray.length; i++){
            if(ingredientArray[i].includes(inputSearchBarSplit)){
                elementArraySearchBar.push(ingredientArray[i]);
            }else if (inputSearchBar.indexOf(" ") !== -1) {
                if(ingredientArray[i].includes (inputSearchBar)){
                    elementArraySearchBar.push(ingredientArray[i]);
                }
            } 
        }     
        for (var i = 0 ; i < applianceArray.length; i++){
            if(applianceArray[i].includes(inputSearchBarSplit)){
                elementArraySearchBar.push(applianceArray[i]);
            }else if (inputSearchBar.indexOf(" ") !== -1) {
                if(applianceArray[i] .includes (inputSearchBar)){
                    elementArraySearchBar.push(applianceArray[i]);
                }
            } 
        }
        for (var i = 0 ; i < ustensilArray.length; i++){
            if(ustensilArray[i].includes(inputSearchBarSplit)){
                elementArraySearchBar.push(ustensilArray[i]);
            }else if (inputSearchBar.indexOf(" ") !== -1) {
                if(ustensilArray[i] .includes (inputSearchBar)){
                    elementArraySearchBar.push(ustensilArray[i]);
                }
            } 
        }
        for(var i = 0 ; i <recipes.length; i++){
            let recipeName = recipes[i].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if(recipeName.includes(inputSearchBar)){
                elementArraySearchBar.push(recipeName);
            } 
        }
    console.log("liste des éléments filtrés");
    console.log(elementArraySearchBar);
    RecipesToFind(elementArraySearchBar);     
    }   
    if(elementArraySearchBar.length == 0 && inputSearchBar.length >2 ) {
        document.getElementById("error-message").classList.remove("hidden")
    } 
}
  