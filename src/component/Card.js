import React from "react";
import { theme } from "../styles/colors";
import { fonts } from "../styles/fonts";
import "./styles/card.css"

export default function Card(props) {
  return (
    <div className="m-3">
        {/* <div className="card" style={{backgroundColor: theme.backgroundColor }}>
            <img src= {props.item.strCategoryThumb} className="card-img-top cardImg" alt="..." />
            <div className="card-body">
                <h5 className="card-title" style={{color: theme.PrimaryColor, fontSize: fonts.headingText}}>
                    {props.item.strCategory}
                </h5>
                <p className="card-text" style={{color:theme.textColor, fontSize: fonts.bodyText}}>
                    {props.item.strCategoryDescription}
                </p>
            </div>
        </div> */}
        <div className='card-container'>
            <img src={props.item.strCategoryThumb} alt="" className="card-img" />
            <p className="card-title">{props.item.strCategory}</p>
        </div>
    </div>
  );
}
