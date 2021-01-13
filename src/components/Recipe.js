import React, {useState, useEffect} from 'react';
import style from '../recipe.module.css';
export default function Recipe({title, calories, image, ingredients}) {

    return (
        <div className={style.recipe}>
            <h3 >{title}</h3>
            <ol  >
                {ingredients.map(ingredient => (
                    <li className={style.items}>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}
