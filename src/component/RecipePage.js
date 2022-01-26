
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
                {/* <div className="full-page">
                    <div className="food-container">
                        <div className="food-info">
                            <div className="info-head">
                                <div className="food-name">
                                <span className="food-name-value">Mixed Berry Melody</span>
                            </div>
                        </div>
                        <div className = "instructions">
                            <p className="instructions-head">{Recipe.strMeal}</p>
                            <p className ="instructions-body">{Recipe.strInstructions}</p>
                             <a href={Recipe.strYoutube} target="_blank" classNameName="btn btn-primary">Check Youtube Video</a>

                        </div>
                    </div>
                    </div>
                    <div className="food-img"><img classNameName='foodimg' src={Recipe.strMealThumb} alt="" /></div>
                </div>  */}
                <div className= 'container fulpage'>
                    <h1>{Recipe.strMeal}</h1>  
                        <div className="banner"  style={{ backgroundImage: `url(${Recipe.strMealThumb})` }}>
                            <div className="tintlayer">
                                <p>hi</p>
                           </div>       
                        </div>
                        <div className="bodycontent">
                            <div className="heading">
                                <div className="ins"><h1>Instructions</h1></div>
                                <div className="method"><h1>Method</h1></div>
                            </div>
                             <hr className="new1"/>
                            <div className="bodytxt">
                                <div className="ingridients">
                                    <ul>
                                        <li>100 ml milk</li>
                                        <li>3 eggs</li>
                                        <li>50 g butter</li>
                                        <li>50 g butter</li>
                                        <li>a pinch of salt</li>
                                    </ul>
                                </div>
                                <div className="method">
                                    <p>{Recipe.strInstructions}</p>
                                <hr className="new1"/>
                                </div>
                            </div>
                        </div>
                </div>   
            </>
        );
    }else{
        return 
        <div></div>
    }
    
}
export default RecipePage;
