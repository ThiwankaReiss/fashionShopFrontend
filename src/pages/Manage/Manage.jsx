import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CanvasModel from '../../canvas';
import './Manage.css';
import ColorPicker from '../../components/ColorPicker/ColorPicker';

const Manage = () => {
    const [currentColor, setCurrentColor] = useState('#EFBD48');
    const [activeTab, setActiveTab] = useState(null);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [beltColor, setBeltColor ] =useState('#000000');
    const colorPickerRef = useRef(null);

    const printColor = (pCol) => {
        console.log(pCol);
        setBeltColor(pCol);
        setCurrentColor(pCol);
    };

    function adjustActiveTab(tab) {
        setActiveTab(activeTab === tab ? null : tab);
    }

    function addPicker(pick) {
        console.log(pick);
        setShowColorPicker(!pick);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
                setShowColorPicker(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [colorPickerRef]);

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
                        <button className="btn btn-outline-secondary w-100" type="button" onClick={() => adjustActiveTab("belt")}>
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
                                <div className="container-fluid m-1 p-0 g-0" ref={colorPickerRef}>
                                    <div className="row m-0 p-0 g-0">
                                        <div className="col-8 text-primary d-flex align-items-center">
                                            Belt Color
                                        </div>
                                        
                                        <div className="col-4 d-flex justify-content-end">
                                            <button onClick={() => { addPicker(showColorPicker) }} className='btn btn-light p-0'>
                                                <img height="40px" src="src/assets/colorPickerImage.jpg" alt="Color Picker"></img>
                                            </button>
                                        </div>
                                        {showColorPicker && (
                                            <div >
                                                <ColorPicker funcColor={printColor} currentColor={currentColor} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='add-height col-lg-8 col-md-8 col-sm-8 m-3'>
                        <CanvasModel beltColor={beltColor} modelName="shirt"></CanvasModel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manage;
