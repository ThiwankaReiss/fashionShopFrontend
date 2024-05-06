import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FrockCustomizer from '../../components/FrockCustomizer.jsx/FrockCustomizer';



const Manage = () => {

   


    return (
        <div>
            <button>View All</button>
            <Link to="/">
                <button>Add Shirt 3D</button>
            </Link>
            <button>Add frock 3D</button>
            <button>Add image</button>
            <FrockCustomizer></FrockCustomizer>
            
        </div>
    );
};

export default Manage;
