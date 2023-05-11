import React, { useEffect, useRef, useState } from 'react';
import { addToDb, getFavoriteRecipes } from '../../utilities/localDb';
import Ingredient from './Ingredient';
import '@smastrom/react-rating/style.css';
import { Rating } from '@smastrom/react-rating';
import { alertSuccess } from '../../utilities/alert';

const Recipe = ({ recipe }) => {
    const { id, name, ingredients, cooking_method, rating } = recipe;
    const [isDisabled, setIsDisabled] = useState(false); 
    const addToFavoritBtn= useRef('Add to Favorite');
    const handleAddToFavorite = () => {
        console.log('added to favorite');
        addToDb(id,name);
        alertSuccess(`${name} is now your favorite recipe!`)
        addToFavoritBtn.current.innerText = 'my favorite';
        setIsDisabled(true);
    }
    const alreadyFavorite=()=>{
        const allFavoriteRecipes=getFavoriteRecipes();
        console.log(allFavoriteRecipes)
        if(id in allFavoriteRecipes)
        setIsDisabled(true);
    }
    useEffect(()=>{
        alreadyFavorite();
    },[])
   
    return (
        <div>
            <div className="card md:w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <div className="chat chat-start">
                        <div className="chat-bubble"><h2 className="card-title">{name}</h2>  <Rating style={{maxWidth:150}} value={rating} readOnly></Rating></div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-accent"><h2 className="card-title">May I know the cooking method?</h2></div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble"><h2 className="card-title">{cooking_method}</h2></div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-accent"><h2 className="card-title">What ingredients are used?</h2></div>
                    </div>
                    <div className="chat chat-start w-full">
                        <div className="chat-bubble w-full card-title">
                            {ingredients.map((ingred, id) => { return <Ingredient key={id} ingred={ingred} id={id} length={ingredients.length}></Ingredient>
                            })}
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button disabled={isDisabled} ref={addToFavoritBtn} onClick={handleAddToFavorite} className="btn btn-secondary">{isDisabled?'MY FAVORITE': 'ADD TO FAVORITE'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;