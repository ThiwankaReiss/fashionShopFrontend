import React from 'react'
import { Link } from "react-router-dom";
const Manage = () => {
    return (
        <div>

            <button>View All</button>
            <Link to="/">
                <button>Add Shirt 3D</button>
            </Link>

            <button>Add frock 3D</button>
            <button>Add image</button>
        </div>
    )
}

export default Manage