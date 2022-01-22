import React from 'react'
import "./styles/card.css"


export default function MealCard(props) {
    return (
        <div className='m-3'>
            <div className='card-container'>
                <img src={props.item.strMealThumb} alt="" className="card-img" />
                <p className="card-title">{props.item.strMeal}</p>
            </div>
        </div>
    )
}
