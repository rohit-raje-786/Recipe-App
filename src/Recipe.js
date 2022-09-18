import React from 'react';
import './App.css';
const Recipe=(props)=>{
    return(
        <div>
            <h1 className="title">{props.title}</h1>
            <img  className="image" src={props.image} alt=""/>
            <p className="calorie"><span>Calories:</span>{props.calories}</p>
            <ol className="ingred">
                <h2 className="ingredtitle">ingredients</h2>
                {props.ingredients.map(ingredient=>(
                    <li className="list">{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
};
export default Recipe;