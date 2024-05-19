import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CanvasModel from '../../canvas';
import './AllFrocks3D.css';
import { useSnapshot } from 'valtio'
import state from '../../store'
import { useNavigate } from 'react-router-dom';
const AllFrocks3D = () => {
    const [frocks, setFrocks] = useState(null);
    const[showEditButton,setShowEditButton]=useState(null);
    const snap = useSnapshot(state);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8080/frock')
            .then(function (response) {
                // Assuming response.data is an array
                setFrocks(response.data);
            });
    }, []);
    const editFrock =(frock) =>{
        state.selectedDress=frock;
        state.situation="customize";
        if(snap.customer==null){
            state.navButton=2;
            navigate('/login');
        }else{
            state.navButton=5;
            navigate('/manage');
        }
       
    }

    return (
        <div className="container w-100">
            <div className="row d-flex justify-content-center">
                {frocks && frocks.map((frock, index) => (
                   
                        <div className="col-lg-3 col-md-3 col-sm-6 add-height-dis m-3 canvas-wrapper" key={index} onMouseEnter={() => setShowEditButton(index)} onMouseLeave={() => setShowEditButton(null)}>
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
                            {showEditButton === index && (
                                <button className="edit-button btn btn-primary btn-sm" onClick={()=>{editFrock(frock)}}><i class="bi bi-pen"></i> Customize</button>
                            )}
                        </div>
                   
                ))}
            </div>
        </div>
    );
};

export default AllFrocks3D;
