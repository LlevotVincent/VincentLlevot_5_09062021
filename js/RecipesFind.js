// //***************************************************************************
// //***************************************************************************
// //*******************  affiche les recettes disponibles  ********************
// //***************************************************************************
// //***************************************************************************

// recipesFind = []
// recipeFindSearchBar = []

// function RecipesToFind() {

//     recipeFindSearchBar = []

//     if (firstFind == true && recipesFind.length>0 ) {
//         for (var p = 0; p < recipesFind.length; p++) {
//             for (var k = 0; k < recipes.length; k++) {
//                 let recipeName = recipes[k].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//                 let ingredients = recipes[k].ingredients
//                     if (recipesFind[p] === recipeName) {
//                         for (var q = 0; q < ingredients.length; q++) {
//                             let ingredient = ingredients[q].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//                         if (ingredient.includes(this.textContent)) {
//                            if(!recipeFindSearchBar.includes(recipeName)){
//                             recipeFindSearchBar.push(recipeName)
//                         }
//                         }
//                         }
//                     let appliances = recipes[k].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//                     if (appliances.includes(this.textContent)) {
//                         if(!recipeFindSearchBar.includes(recipeName)){
//                         recipeFindSearchBar.push(recipeName);
//                         }
//                     }
//                     let ustensils = recipes[k].ustensils;
//                     for (var l = 0; l < ustensils.length; l++) {
//                         let ustensil = ustensils[l].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//                         if (ustensil.includes(this.textContent)) {
//                             if(!recipeFindSearchBar.includes(recipeName)){
//                             recipeFindSearchBar.push(recipeName);
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//         recipesFind = [].concat(recipeFindSearchBar)
//         console.log(recipesFind)
//         CreateCard(recipesFind);
//         return

//     }
//     if (elementArraySearchBar.length > 0) {
//         for (var k = 0; k < recipes.length; k++) {
//             let recipeName = recipes[k].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//             let ingredients = recipes[k].ingredients;
//             for (var i = 0; i < elementArraySearchBar.length; i++) {
//                 for (var j = 0; j < ingredients.length; j++) {
//                     let ingredient = ingredients[j].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//                     if (ingredient.includes(elementArraySearchBar[i])) {
//                         if (!recipeFindSearchBar.includes(recipeName)) {
//                             recipeFindSearchBar.push(recipeName);
//                         }
//                     }
//                 }
//                 if (recipeName.includes(elementArraySearchBar[i])) {
//                     if (!recipeFindSearchBar.includes(recipeName)) {
//                         recipeFindSearchBar.push(recipeName);
//                     }
//                 }
//                 let appliances = recipes[k].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//                 if (appliances.includes(elementArraySearchBar[i])) {
//                     if (!recipeFindSearchBar.includes(recipeName)) {
//                         recipeFindSearchBar.push(recipeName);
//                     }
//                 }
//                 let ustensils = recipes[k].ustensils;
//                 for (var j = 0; j < ustensils.length; j++) {
//                     let ustensil = ustensils[j].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//                     if (ustensil.includes(elementArraySearchBar[i])) {
//                         if (!recipeFindSearchBar.includes(recipeName)) {
//                             recipeFindSearchBar.push(recipeName);
//                         }
//                     }
//                 }
//             }
//         }

//         recipesFind = [].concat(recipeFindSearchBar)


//     } else {
//         for (var j = 0; j < recipes.length; j++) {
//             let recipeName = recipes[j].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//             let ingredients = recipes[j].ingredients
//             let ustensils = recipes[j].ustensils;

//             for (var k = 0; k < ingredients.length; k++) {
//                 let ingredient = ingredients[k].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//                 if (ingredient.includes(this.textContent)) {
//                     recipesFind.push(recipeName);
//                 }
//             }
//             let appliances = recipes[j].appliance.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//             if (appliances.includes(this.textContent)) {
//                 recipesFind.push(recipeName);
//             }
//             for (var l = 0; l < ustensils.length; l++) {
//                 let ustensil = ustensils[l].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
//                 if (ustensil.includes(this.textContent)) {
//                     recipesFind.push(recipeName);
//                 }
//             }
//         }
//     }
//     console.log("liste des éléments filtrés");
//     console.log(recipesFind);
//     CreateCard(recipesFind);
// }


