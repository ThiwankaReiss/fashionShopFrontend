import React, { useState } from 'react';

const ImgScaler = ({ Image , setterFunction}) => {


    function getValue(event) {
        const value = event.target.value;

        setterFunction(value);
    }

    return (
        <div className='card m-1'>
            {
                Image && (
                    <>
                        <div className='w-100 d-flex justify-content-center text-secondary mt-2 mb-2'>Current Image</div>
                        <div className='w-100 d-flex justify-content-center mb-3'>
                            <img className='image-styles bg-black' src={"https://drive.google.com/thumbnail?id="+Image} alt="decal"></img>
                        </div>
                        <form>
                            <label htmlFor="customRange1" className="form-label">Example range</label>
                            <input type="range" className="form-range"  onChange={getValue} id="customRange1"/>
                        </form>
                    </>
                )
            }
        </div>
    );
}

export default ImgScaler;
