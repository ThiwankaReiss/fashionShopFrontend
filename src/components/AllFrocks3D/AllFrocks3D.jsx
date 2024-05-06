import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CanvasModel from '../../canvas';
import './AllFrocks3D.css'
const AllFrocks3D = () => {
    const [frocks, setFrocks] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:8080/frock')
            .then(function (response) {
                // Assuming response.data is an array
                setFrocks(response.data);

            })
           
    }, []);
    console.log(frocks);
    return (
        <div className="container w-100">
            <div className="row d-flex justify-content-center">
                {frocks && frocks.map((frock, index) => (
                    <div className="col-lg-3 col-md-3 col-sm-6 add-height-dis m-3">
                        {index<7 && (
                            <CanvasModel
                            beltColor={frock.beltColor}
                            buckelColor={frock.buckelColor}
                            topColor={frock.topColor}
                            modelName="frock"
                            bottomColor={frock.bottomColor}
                            topDecalImage={frock.topDecalImage}
                            decalScale={frock.decalScale / 50}
                            bottomTextureImage={frock.bottomTextureImage}
                            imageRepeate={frock.imageRepeate / 5}
                            model={index}
                        />
                        )}
                    
                    </div>
                ))}
            </div>
            

        </div>

    )
}

export default AllFrocks3D