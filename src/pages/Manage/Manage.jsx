import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CanvasModel from '../../canvas';
import './Manage.css';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import Tab from '../../components/Tab/Tab';
import DropDown from '../../components/DropDown/DropDown';
import PicUpload from '../../components/PicUpload/PicUpload';

const Manage = () => {

    const [activeTab, setActiveTab] = useState(null);
    const [beltColor, setBeltColor] = useState('#000000');
    const [buckelColor, setBuckelColor] = useState('#000000');
    const [topColor, setTopColor] = useState('#000000');
    const [bottomColor, setBottomColor] = useState('#000000');
    const [topDecalImage, setTopDecalImage] = useState('1NMJJofs5mWyWsw--LyhPOxemwoTZbmJr');


    const getBeltColor = (col) => {
        setBeltColor(col);
    };
    const getTopColor = (col) => {
        setTopColor(col);
    };
    const getBuckelColor = (col) => {
        setBuckelColor(col);
    };
    const getBottomColor = (col) => {
        setBottomColor(col);
    };
    const getTopDecalImage = (col) => {
        setTopDecalImage(col);
        console.log(col);
    }
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
                        <DropDown text="Top" adjustActiveTab={adjustActiveTab} tab="top"></DropDown>
                        {
                            activeTab && activeTab === "top" && (
                                <>
                                    <Tab getColor={getTopColor} currentColor={topColor} text="Top Color"></Tab>
                                    <PicUpload getImage={getTopDecalImage} text="Upload Image (front)"></PicUpload>
                                </>

                            )
                        }
                        <DropDown text="Belt" adjustActiveTab={adjustActiveTab} tab="belt"></DropDown>
                        {
                            activeTab && activeTab === "belt" && (
                                <>
                                    <Tab getColor={getBeltColor} currentColor={beltColor} text="Belt Color"></Tab>
                                    <Tab getColor={getBuckelColor} currentColor={buckelColor} text="Buckel Color"></Tab>
                                </>

                            )
                        }
                        <DropDown text="Bottom" adjustActiveTab={adjustActiveTab} tab="bottom"></DropDown>
                        {
                            activeTab && activeTab === "bottom" && (
                                <>
                                    <Tab getColor={getBottomColor} currentColor={bottomColor} text="Bottom Color"></Tab>
                                </>

                            )
                        }


                    </div>
                    <div className='add-height col-lg-8 col-md-8 col-sm-8 m-3'>
                        <CanvasModel
                            beltColor={beltColor}
                            buckelColor={buckelColor}
                            topColor={topColor}
                            modelName="shirt"
                            bottomColor={bottomColor}
                            topDecalImage={topDecalImage}
                        ></CanvasModel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manage;
