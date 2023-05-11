import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
import Recipe from './Recipe';
import Spiner from '../../Shared/Spiner';

const Recipes = () => {
    let [loader, setLoader] = useState(true);
    const [chef, setChef] = useState({});
    const recipes = useLoaderData();
    const chefId = recipes[0].chef_id;

    useEffect(() => {
        fetch(`https://b7a10-chef-recipe-hunter-server-side-riasat97.vercel.app/chefs/${chefId}`)
            .then(res => res.json())
            .then(data => {
                setChef(data);
                setLoader(false);
            })
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='max-w-7xl mx-auto px-10'>
            <Spiner loading={loader}></Spiner>
            {/* chef banner */}
            <ChefCard chef={chef} page='recipes'></ChefCard>
            <div className="divider my-12 text-5xl font-extrabold">Top Recipes</div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-8'>
                {
                    recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Recipes;