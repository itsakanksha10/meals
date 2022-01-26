import React from "react";
import "./styles/card.css"

export default function Card(props) {

  const circleStyle = {
    backgroundImage: `url(${props.item.strCategoryThumb})` 
  }
    
  return (
    // <div className="m-3">
    //     <div className='card-container'>
    //         <img src={props.item.strCategoryThumb} alt="" className="card-img" />
    //         <p className="card-title">{props.item.strCategory}</p>
    //     </div>
    // </div>
    <div className="main-container">
      <div className="outer-circle">
        <div className="inner-circle" style={circleStyle}></div>
      </div>
      <p className="category-name">{props.item.strCategory}</p>
    </div>
  );
}
