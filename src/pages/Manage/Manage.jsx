import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CanvasModel from '../../canvas';
import './Manage.css';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import Tab from '../../components/Tab/Tab';

const Manage = () => {

    const [activeTab, setActiveTab] = useState(null);
    const [beltColor, setBeltColor ] =useState('#000000');
    const [buckelColor, setBuckelColor]=useState('#000000');


    const getBeltColor = (pCol) => {
        setBeltColor(pCol);
    };
    const getBuckelColor = (pCol) => {
        setBuckelColor(pCol);
    };
    function adjustActiveTab(tab) {
        setActiveTab(activeTab === tab ? null : tab);
    }

    

    return (
        <div>
            <button>View All</button>
            <Link to="/">
                <button>Add Shirt 3D</button>
            </Link>
            <button>Add frock 3D</button>
            <button>Add image</button>
            <div className="container">
                <div className="row">
                    <div className='col-lg-3 col-md-3 col-sm-3 m-3 card'>
                        <button className="btn btn-outline-secondary w-100 mt-1" type="button" onClick={() => adjustActiveTab("belt")}>
                            <div className="container-fluid m-0 p-0 g-0">
                                <div className="row m-0 p-0 g-0">
                                    <div className="col-8 d-flex align-items-center">
                                        Belt
                                    </div>
                                    <div className="col-4 d-flex justify-content-end">
                                        <i className="bi bi-caret-down"></i>
                                    </div>
                                </div>
                            </div>
                        </button>
                        {
                            activeTab && activeTab === "belt" && (
                                
                                <Tab getColor={getBeltColor} currentColor={beltColor} text="Belt Color"></Tab>
                            )
                        }
                        {
                            activeTab && activeTab === "belt" && (
                                
                                <Tab getColor={getBuckelColor} currentColor={buckelColor} text="Buckel Color"></Tab>
                            )
                        }

                        
                    </div>
                    <div className='add-height col-lg-8 col-md-8 col-sm-8 m-3'>
                        <CanvasModel beltColor={beltColor} buckelColor={buckelColor} modelName="shirt"></CanvasModel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manage;
