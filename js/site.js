
function noAccent(event){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
    
    if(ingredientArray.item.includes(accent.item)){
        ingredientArray.item.replace(accent[i],noaccent[i]);
    }
    console.log(ingredientArray)
}


//creer un tableau des ingrédients
var ingredientArray = [];
createIngredientArray(ingredientArray);
//noAccent(ingredientArray);



function createIngredientArray (ingredientList){
    for (var i = 0; i < recipes.length; i++) {
        let ingredients = recipes[i].ingredients;
        for (var j = 0; j < ingredients.length; j++){
            let ingredient = ingredients[j].ingredient.toLowerCase();
            if (!ingredientList.includes(ingredient)){
                ingredientList.push(ingredient);
            }
        }
    }
}

//const applianceArray = [];
//createapplianceArray(applianceArray);

//function createapplianceArray (applianceList){
//    for (var i = 0; i < recipes.length; i++) {
//        let appliance = recipes[i].appliance;
//            if (!applianceList.includes(appliance)){
//                applianceList.push(appliance);
//            }
//        }
//    }


//trie le tableau ingredients suivant l'input de la barre de recherche Ne fonctionne pas

let ingredientFilter = []
let searchBar = document.getElementById("searchbar__text");

searchBar.addEventListener("change", function(){
 console.table(ingredientArray); // vérifie le tableau Ingredient

let inputSearchBar = searchBar.value.toLowerCase();

let ingredientResult = ingredientArray.indexOf(inputSearchBar);
console.log(ingredientResult)
if (ingredientResult != -1){
    ingredientFilter.push(ingredientResult);
    console.table(ingredientFilter);

}


   // const ingredientfilter = ingredientArray.filter(item => item.value.includes(inputSearchBar));
   // console.table(ingredientfilter)
});
