import React from 'react'
import "./styles/card.css"




export default function MealCard(props) {

    const circleStyle = {
        backgroundImage: `url(${props.item.strMealThumb})` 
      }
    

    return (
        <div className="main-container">
        <div className="outer-circle">
          <div className="inner-circle" style={circleStyle}></div>
        </div>
        <p className="category-name">{props.item.strMeal}</p>
      </div>
    )
}
