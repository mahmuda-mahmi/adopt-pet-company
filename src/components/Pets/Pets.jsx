/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Pet from '../Pet/Pet';
import './Pets.css'

const Pets = ({handleCart}) => {
    const[pets, setPets] = useState([]);

    
    useEffect(() => {
        fetch('pets.json')
        .then(res => res.json())
        .then(data => setPets(data))
    } ,[])

    return (
        <div className='pets'>
            <div className='grid'>
            {
                pets.map((pet, idx) => <Pet 
                key = {idx}
                pet = {pet}
                handleCart={handleCart}
                ></Pet>)
            }
            </div>
            
        </div>
    );
};

export default Pets;