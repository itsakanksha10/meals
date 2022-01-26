
import axios from 'axios';
import React, {useEffect, useState } from 'react';
import './styles/recipe.css';
import { GiMeal } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import { AiFillStar,AiOutlineStar,AiFillYoutube } from "react-icons/ai";



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
                            <div className="summaryBlock">
                                <p className="category">Category: {Recipe.strCategory}</p>
                                <p className="origin">Origin: {Recipe.strArea}</p>
                            </div>      
                        </div>
                        <div className="bodycontent">
                            <div className="heading">
                                <div className="ins"><h1>Ingredients</h1></div>
                                <div className="method"><h1>Method</h1></div>
                            </div>
                             <hr className="new1"/>
                            <div className="bodytxt">
                                <div className="recipetext">
                                <div className="ingridients">
                                    <ul>
                                        { Recipe.strIngredient1 !== '' && <li>{Recipe.strMeasure1} {Recipe.strIngredient1}</li>}
                                        { Recipe.strIngredient2 !== '' && <li>{Recipe.strMeasure2} {Recipe.strIngredient2}</li>}
                                        { Recipe.strIngredient3 !== '' && <li>{Recipe.strMeasure3} {Recipe.strIngredient3}</li>}
                                        { Recipe.strIngredient4 !== '' && <li>{Recipe.strMeasure4} {Recipe.strIngredient4}</li>}
                                        { Recipe.strIngredient5 !== '' && <li>{Recipe.strMeasure5} {Recipe.strIngredient5}</li>}
                                        { Recipe.strIngredient6 !== '' && <li>{Recipe.strMeasure6} {Recipe.strIngredient6}</li>}
                                        { Recipe.strIngredient7 !== '' && <li>{Recipe.strMeasure7} {Recipe.strIngredient7}</li>}
                                        { Recipe.strIngredient8 !== '' && <li>{Recipe.strMeasure8} {Recipe.strIngredient8}</li>}
                                        { Recipe.strIngredient9 !== '' && <li>{Recipe.strMeasure9} {Recipe.strIngredient9}</li>}
                                        { Recipe.strIngredient10 !== '' && <li>{Recipe.strMeasure10} {Recipe.strIngredient10}</li>}
                                        { Recipe.strIngredient11 !== '' && <li>{Recipe.strMeasure11} {Recipe.strIngredient11}</li>}
                                        { Recipe.strIngredient12 !== '' && <li>{Recipe.strMeasure12} {Recipe.strIngredient12}</li>}
                                        { Recipe.strIngredient13 !== '' && <li>{Recipe.strMeasure13} {Recipe.strIngredient13}</li>}
                                        { Recipe.strIngredient14 !== '' && <li>{Recipe.strMeasure14} {Recipe.strIngredient14}</li>}
                                        { Recipe.strIngredient15 !== '' && <li>{Recipe.strMeasure15} {Recipe.strIngredient15}</li>}
                                        { Recipe.strIngredient16 !== '' && <li>{Recipe.strMeasure16} {Recipe.strIngredient16}</li>}
                                        { Recipe.strIngredient17 !== '' && <li>{Recipe.strMeasure17} {Recipe.strIngredient17}</li>}
                                        { Recipe.strIngredient18 !== '' && <li>{Recipe.strMeasure18} {Recipe.strIngredient18}</li>}
                                        { Recipe.strIngredient19 !== '' && <li>{Recipe.strMeasure19} {Recipe.strIngredient19}</li>}
                                        { Recipe.strIngredient20 !== '' && <li>{Recipe.strMeasure20} {Recipe.strIngredient20}</li>}
                                    </ul>
                                </div>
                                <div className="method">
                                    <p className='recipeins'>{Recipe.strInstructions}</p>
                                </div> 
                                </div>
                                <hr className="new1"/>
                                <a href={Recipe.strYoutube} target="_blank" className="btn btn-danger youtubebutton"><AiFillYoutube />Check Video</a>
                                </div>
                            </div>
                        </div>
            </>
        );
    }else{
        return (
            <div></div>
        )
    }
    
}
export default RecipePage;
