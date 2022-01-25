import React from "react";
import "./styles/card.css"

export default function Card(props) {
    
  return (
    <div className="m-3">
        <div className='card-container'>
            <img src={props.item.strCategoryThumb} alt="" className="card-img" />
            <p className="card-title">{props.item.strCategory}</p>
        </div>
        {/* <div className="card">
                    {
                        <img src={props.item.strCategoryThumb} className="card-img-top" alt="..."/>
                    }
                    <div className="card-body">
                        <h5 className="card-title">{props.item.strCategory}</h5>
                    </div>
                </div> */}
    </div>
  );
}
