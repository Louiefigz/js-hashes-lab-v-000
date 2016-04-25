'use strict';

function addIngredient(recipe, item, measure){
  recipe[item] = measure;
  return recipe;
}


function removeIngredient(recipe){

  delete recipe["vanilla"];
  return recipe;
}

function updateIngredient(recipe, item, measure){
  recipe[item] = measure;
  return recipe;
}

function readRecipe(recipe){

  for (var item in recipe){
  console.log("this recipe calls for " + recipe[item] + " of " + item );
  }
}
