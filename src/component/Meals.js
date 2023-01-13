import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MealCard from './MealCard';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import "./styles/meal.css"


export default function Meals() {
    useEffect(()=>{
        getMeals();
    },[])

    function returnback(){
        navigate("/")
    }

    const navigate = useNavigate();

    const [meals, setMeals] = useState([])

    function getMeals(){
        const value = localStorage.getItem('currentCategory');
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
        axios({
            method: 'get',
            url: url,
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        }).then((response)=>{
            setMeals(response.data.meals)
        })
    }
    function ClickRecipe(selectedRecipe){
        localStorage.setItem('currentRecipe',selectedRecipe);
        navigate("/recipe")
    }
      
    return (
        <div>
           <div className="container">
               <div className="row">
                   <div className="head-container">
                    <IoIosArrowRoundBack className="back-arrow" onClick={returnback}/>
                    <h1 className='pageHeading m-3'>
                       <strong>{localStorage.getItem('currentCategory')}</strong> 
                    </h1>
                   </div>
                    {
                        meals.map((element,index)=>{
                            return(
                                <div className='col-md-4 categoryCard' key={index} onClick={()=>{ClickRecipe(element.idMeal)}}>
                                    <MealCard item={element}/>
                                </div>
                            );
                        })
                    }
               </div>
           </div>
        </div>
    )
}
