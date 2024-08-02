/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Pet.css'

const Pet = ({pet, handleCart}) => {
    const {id, name, picture, description, age, breed,} = pet;
    return (
        <div className='box'>
            <img src={picture} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <h5>Breed: <span>{breed}</span></h5>
            <h5>Age: <span>{age}</span></h5>
            <button onClick={() => handleCart(name)}>Get Pet</button>
        </div>
    );
};

export default Pet;