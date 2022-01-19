import React, { useState,useEffect } from 'react'
import Card from './Card';
import axios from 'axios';
import './styles/foodCategory.css';
import HomeBanner from './HomeBanner';

export default function FoodCategory() {

    useEffect(() => {
        getCategories();
    }, [])

    const [mealCategories, setCategories] = useState([]);

    async function getCategories(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        axios({
            method: 'get',
            url: url,
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        }).then((response) => {
            const categoryData = response.data.categories;
            setCategories(categoryData);
        }, (error) => {
            console.log('Error: ', error);
        })
    }

    return (
        <div>
            <HomeBanner/>
            <div className="container">
                <div className="row">
                    {
                        mealCategories.map((element, index)=> {
                            return(
                                <div className='col-md-4' key={index}>
                                    <Card item={element}/>
                                </div>
                            );
                        })
                    }   
                </div>
            </div>
        </div>
    )
}
