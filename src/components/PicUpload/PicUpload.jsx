import React, { useState } from 'react';
import axios from 'axios';
const PicUpload = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append('image', image);

        axios.post('http://localhost:8080/upload', formData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    try {

        //   const response = await fetch('http://localhost:8080/upload', {
        //     method: 'POST',
        //     body: formData,
        //   });
        //   console.log(response);
        //   if (response.ok) {
        //     console.log('Image uploaded successfully!');
        //     console.log(response);
        //     // Handle success
        //   } else {
        //     console.error('Failed to upload image');
        //     // Handle error
        //   }

    } catch (error) {
        console.error('Error uploading image:', error);


    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button onClick={uploadImage}>Upload Image</button>
            <img src="https://drive.google.com/uc?export=view&id=1M7GQObKFxpBM1_3wCazLt5k3feY342iM"></img>
            <img src="https://drive.google.com/thumbnail?id=1M7GQObKFxpBM1_3wCazLt5k3feY342iM"/>
            <img src="https://drive.google.com/thumbnail?id=1lAjGvKnX2rYGq6BWJ0X_8IWce-N1EEbt"/>
            
            
        </div>
    );
};

export default PicUpload;
