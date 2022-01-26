import React from 'react'
import "./styles/meal.css"
import "./styles/card.css"



export default function MealCard(props) {

    const circleStyle = {
        backgroundImage: `url(${props.item.strMealThumb})` 
      }

    return (
        // <div className='m-3'>
        //     <div className='card-container'>
        //         <img src={props.item.strMealThumb} alt="" className="card-img" />
        //         <p className="card-title">{props.item.strMeal}</p>
        //     </div>
        // </div>
        <div className="main-container">
        <div className="outer-circle">
          <div className="inner-circle" style={circleStyle}></div>
        </div>
        <p className="category-name">{props.item.strMeal}</p>
      </div>
    )
}
