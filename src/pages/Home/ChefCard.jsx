import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { FaHeart, FaCalendarCheck,FaConciergeBell } from 'react-icons/fa';
const ChefCard = ({ chef, page }) => {
    const { id, picture, name, bio, likes, recipes, years_of_experience } = chef;
    return (
        <div className='my-2 '>
            {
                page === 'home'
                    ?
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <LazyLoad height={240} offset={120}>
                                <img style={{ height: '240px' }} src={picture} alt="Chef" className="rounded-xl" />
                            </LazyLoad>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p className='flex items-center gap-2'><FaHeart className='text-red-700'></FaHeart> <>Likes: {likes}</> </p>
                            <p className='flex items-center gap-2'><FaConciergeBell></FaConciergeBell> <>recipes: {recipes}</> </p>
                            <p className='flex items-center gap-2'><FaCalendarCheck></FaCalendarCheck> <>experience: {years_of_experience} years</> </p>
                            <div className="card-actions mt-4">
                                <Link to={`chefs/${id}/recipes`}><button className="btn btn-primary">View Recipes</button></Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="card lg:card-side bg-base-100 shadow-xl md:h-80">
                        <figure>
                            <LazyLoad height={320} offset={160}>
                                <img className='h-full' src={picture} alt="chef" />
                            </LazyLoad>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{bio}</p>
                            <p className='flex items-center gap-2'><FaHeart className='text-red-700'></FaHeart> <>Likes: {likes}</> </p>
                            <p className='flex items-center gap-2'><FaConciergeBell></FaConciergeBell> <>recipes: {recipes}</> </p>
                            <p className='flex items-center gap-2'><FaCalendarCheck></FaCalendarCheck> <>experience: {years_of_experience} years</> </p>
                        </div>
                    </div>
            }

        </div>
    );
};

export default ChefCard;