import React from 'react'
import { Link } from "react-router-dom";
import CanvasModel from '../../canvas';
import './Manage.css'
const Manage = () => {
    return (
        <div>

            <button>View All</button>
            <Link to="/">
                <button>Add Shirt 3D</button>
            </Link>

            <button>Add frock 3D</button>
            <button>Add image</button>
            <div className='add-height'>
                <CanvasModel modelName="shirt"></CanvasModel>
            </div>

        </div>
    )
}

export default Manage