import React from 'react';

const Ingredient = ({ingred,id,length}) => {
    return (
        <>
        {ingred}{id === length - 1 ? ' etc' : ', '}
        </>
    );
};

export default Ingredient;