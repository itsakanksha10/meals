import React, { useState,useEffect } from 'react'
import Card from './Card';
import axios from 'axios';
import './styles/foodCategory.css';
import { useNavigate } from 'react-router-dom';
import HomeBanner from './HomeBanner';
export default function FoodCategory() {

    useEffect(() => {
        getCategories();
    }, [])

    const navigator = useNavigate();

    const [mealCategories, setCategories] = useState([]);

    function getCategories(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        axios({
            method: 'get',
            url: url,
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        }).then((response) => {
            setCategories(response.data.categories);
        }, (error) => {
            console.log('Error: ', error);
        })
    }
    function getCategory(mealCategory){
        localStorage.setItem('currentCategory',mealCategory);
        navigator('/meals');
    }

    return (
        <div>
            <HomeBanner/>
            <div className="container">
                <div className="row">
                    <div className="txt">
                        <h1 className='heading'>Popular Food</h1>
                        <p>We provide a variety of food and beverage recipes </p> <p> with high taste from famous chefs</p>
                    </div>
                    {
                        mealCategories.map((element, index)=> {
                            return(
                                <div className='col-md-4 cardParent' key={index} onClick={()=>getCategory(element.strCategory)}>
                                    <Card item={element}/>
                                    {/* <Card name={element.strCategory} image={element.strCategoryThumb}/> */}
                                </div>
                            );
                        })
                    }   
                </div>
            </div>
        </div>
    )
}
