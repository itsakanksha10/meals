import { computeHeadingLevel } from '@testing-library/react';
import axios from 'axios';
import React, {useEffect, useState } from 'react';
import './styles/recipe.css';


const RecipePage =() =>{

    useEffect(()=>{
        getRecipe();
    },[])

    const [Recipe,SetRecipe] = useState();
    
    
    function getRecipe(){
        const val = localStorage.getItem('currentRecipe')
        const url=  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${val}`;
        axios({
            method: 'get',
            url: url,
            headers:{'Content-Type': 'application/json', 'Accept': 'application/json'}   
        }).then((response)=>{
            SetRecipe(response.data.meals[0])
        })
    }
    if(Recipe){
        return (
            <>
                <div class="full-page">
                    <div class="food-container">
                        <div class="food-info">
                            <div class="info-head">
                                <div class="food-name">
                                {/* <span class="food-name-value">Mixed Berry Melody</span> */}
                            </div>
                        </div>
                        <div class = "instructions">
                            <p class="instructions-head">{Recipe.strMeal}</p>
                            <p class ="instructions-body">{Recipe.strInstructions}</p>
                        </div>
                    </div>
                    </div>
                    <div class="food-img"><img className='foodimg' src={Recipe.strMealThumb} alt="" /></div>
                </div>
            </>
        );
    }else{
        return <div></div>
    }
    
}
export default RecipePage;
