import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CanvasModel from '../../canvas';
import './FrockCustomizer.css';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import Tab from '../../components/Tab/Tab';
import DropDown from '../../components/DropDown/DropDown';
import PicUpload from '../../components/PicUpload/PicUpload';
import ImgScaler from '../../components/ImgScaler/ImgScaler';
import { useSnapshot } from 'valtio'
import state from '../../store'
import axios from 'axios';
import Swal from 'sweetalert2'
const FrockCustomizer = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [beltColor, setBeltColor] = useState('#9013FE');
    const [buckelColor, setBuckelColor] = useState('#FF933B');
    const [topColor, setTopColor] = useState('#FF3333');
    const [bottomColor, setBottomColor] = useState('#EFBD48');
    const [topDecalImage, setTopDecalImage] = useState('14m0eQh1QVT5-hW7rm1Fu9vu3eJP8eO13');
    const [decalScale, setDecalScale] = useState(65);
    const [bottomTextureImage, setBottomTextureImage] = useState('1t9LbOEsYDpC-HIBaDna9fXnwgUeytYe1');
    const [imageRepeate, setImageRepeate] = useState(50);
    const [showTopImage, setShowTopImage] = useState(true);
    const [showBottomImage, setShowBottomImage] = useState(true);
    const snap = useSnapshot(state);
    const [customer, setCustomer] = useState(snap.customer);

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
    }
    const getBottomTetureImage = (col) => {
        setBottomTextureImage(col);
    }
    function adjustActiveTab(tab) {
        setActiveTab(activeTab === tab ? null : tab);
    }

    function saveFrock() {

        axios.post('http://localhost:8080/frock', {
            customerId: customer.id,
            beltColor: beltColor,
            buckelColor: buckelColor,
            topColor: topColor,
            bottomColor: bottomColor,
            topDecalImage: topDecalImage,
            decalScale: decalScale,
            bottomTextureImage: bottomTextureImage,
            imageRepeate: imageRepeate
        }
        )
            .then(function (response) {
                console.log(response.data);
                state.customer = response.data;
                Swal.fire({
                    title: "Sucess!",
                    text: "Your Frock Model Was Saved Sucessfully! We will contact you to provide more details about princing",
                    icon: "success"
                  });
                  Swal.hideLoading();
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log(imageRepeate)

    return (
        <div className="container">
            <div className="row">
                <div className='col-lg-3 col-md-3 col-sm-3 m-3 card'>
                    <DropDown text="Top" adjustActiveTab={adjustActiveTab} tab="top"></DropDown>
                    {
                        activeTab && activeTab === "top" && (
                            <>
                                <Tab getColor={getTopColor} currentColor={topColor} text="Top Color"></Tab>
                                <PicUpload getImage={getTopDecalImage} setShowImage={setShowTopImage} showImage={showTopImage} text="Upload Image (front)"></PicUpload>
                                <ImgScaler Image={topDecalImage} setterFunction={setDecalScale} showImage={showTopImage}></ImgScaler>
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
                                <PicUpload getImage={getBottomTetureImage} setShowImage={setShowBottomImage} showImage={showBottomImage} text="Upload Image (bottom)"></PicUpload>
                                <ImgScaler showImage={showBottomImage} Image={bottomTextureImage} setterFunction={setImageRepeate}></ImgScaler>
                            </>

                        )
                    }


                </div>
                <div className='add-height col-lg-8 col-md-8 col-sm-8 m-3'>
                    <CanvasModel
                        beltColor={beltColor}
                        buckelColor={buckelColor}
                        topColor={topColor}
                        modelName="frock"
                        bottomColor={bottomColor}
                        topDecalImage={topDecalImage}
                        decalScale={decalScale / 50}
                        bottomTextureImage={bottomTextureImage}
                        imageRepeate={imageRepeate / 5}
                    ></CanvasModel>
                </div>
                <div className='col-12  d-flex justify-content-end'>
                    <button onClick={saveFrock} className='btn btn-outline-secondary mb-3 add-margin'>
                        Finalise
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FrockCustomizer