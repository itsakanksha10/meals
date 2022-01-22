import { computeHeadingLevel } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RecipePage() {
  useEffect(() => {
    getRecipe();
  }, []);

  const [Recipe, SetRecipe] = useState();
  const [ingredients, setIngredients] = useState([]);

  function getRecipe() {
    const val = localStorage.getItem("currentRecipe");
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${val}`;
    axios({
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => {
      SetRecipe(response.data.meals[0]);
      CreateIngredientList();
    });
  }

  // [
  //    {ingredient_name: 'Fennel', quantity: '2 medium'},
  //    {ingredient_name: 'Parsley', quantity: '2 tbs chopped'}
  // ]
  function CreateIngredientList() {}

  if (Recipe) {
    return (
      <>
        <div class="full-page">
          <div class="food-text">
            <div class="food-details">
              <div class="ingredient">
                <span class="ingredient-heading">Ingredients</span>
                <div class="wrapper">
                  <div class="ing-item">
                    <input type="checkbox"id="ingrident1"name="ingrident1" value="4"/>
                    <label for="vehicle1"> 4 Raspberries</label>
                  </div>
                  <div class="ing-item">
                    <input type="checkbox"id="ingrident3"name="ingrident3"value="1 Strawberry"/>
                    <label for="vehicle3"> 1 Strawberry</label>
                  </div>
                  <div class="ing-item">
                    <input type="checkbox" id="ingrident4" name="ingrident4" value="1/2 Lemon"/>
                    <label for="vehicle3"> 1/2 Lemon</label>
                  </div>
                  <div class="ing-item">
                    <input type="checkbox"id="ingrident4"name="ingrident5"value="2 Cherries"/>
                    <label for="vehicle3"> 2 Cherries</label>
                  </div>
                  <div class="ing-item">
                    <input type="checkbox"id="ingrident4"name="ingrident6"value="mint"/>
                    <label for="vehicle3"> mint</label>
                  </div>
                </div>
              </div>
              <div class="instructions">
                <p class="instructions-head">Instructions</p>
                <p class="instructions-body"></p>
              </div>
            </div>
          </div>
          <div class="food-img"></div>
        </div>
      </>
    );
  } else {
    return <div></div>;
  }
}
