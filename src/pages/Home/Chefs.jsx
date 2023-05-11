import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
import Spiner from '../../Shared/Spiner';
import Img from '../../assets/chef-chats.jpg'
import LazyLoad from 'react-lazy-load';
import Testimonial from './Testimonial';
import Stats from './Stats';

const Chefs = () => {
    let [loading, setLoading] = useState(true);
    const [chefs, setChefs] = useState([]);
    const allChefs = useLoaderData();
    useEffect(() => {
        setChefs(allChefs);
        setLoading(false);
    }, [allChefs])
    return (
        <div className='max-w-7xl mx-auto px-10'>
            <Spiner loading={loading}></Spiner>
            <LazyLoad height={384} offset={192}>
                <div className="hero md:h-96 mt-4 " style={{ backgroundImage: `url(${Img})`, borderRadius: '8px' }}>
                    <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h3 className="mb-32 text-6xl font-bold">Welcome to </h3>
                            {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </LazyLoad>

            <div className="divider mt-2 md:mt-16 text-2xl md:text-5xl font-extrabold">Our World Famous Chefs</div>
            {
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                    {chefs.map(chef => <ChefCard key={chef.id} chef={chef} page='home'></ChefCard>)}
                </div>
            }
            <div className="divider mt-24 text-5xl font-extrabold">Stats</div>
            <Stats></Stats>

            <div className="divider mt-24 text-5xl font-extrabold">Testimonials</div>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Chefs;