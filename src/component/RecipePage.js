import { computeHeadingLevel } from '@testing-library/react';
import axios from 'axios';
import React, {useEffect, useState } from 'react';

export default function RecipePage() {

    useEffect(()=>{
        getRecipe();
    },[])

    const [Recipe,SetRecipe] = useState();
    const [ingredients, setIngredients] = useState([])
    
    function getRecipe(){
        const val = localStorage.getItem('currentRecipe')
        const url=  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${val}`;
        axios({
            method: 'get',
            url: url,
            headers:{'Content-Type': 'application/json', 'Accept': 'application/json'}   
        }).then((response)=>{
            SetRecipe(response.data.meals[0])
            CreateIngredientList();
        })
    }
    
    // [
    //    {ingredient_name: 'Fennel', quantity: '2 medium'},
    //    {ingredient_name: 'Parsley', quantity: '2 tbs chopped'}
    // ]
    function CreateIngredientList(){

        }



    if(Recipe){
        return (
            <div>
               <p>Recipe name is: {Recipe.strMeal}</p>
               <p>Area {Recipe.strArea}</p>
            </div>
        );
    }else{
        return <div></div>
    }
    
}
