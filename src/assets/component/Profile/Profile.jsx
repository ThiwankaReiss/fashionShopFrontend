import { useState } from 'react'; // Import useState hook
import { useCustomer } from './../Context/CustomerContext.jsx';
import './Profile.css';
import axios from 'axios';

export default function Profile() {
  const { customer } = useCustomer();
  const { setCustomer } = useCustomer();
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
  setImage(file);

  const formData = new FormData();
  formData.append('image', file);

  axios.post('http://localhost:8080/upload', formData)
    .then(function (response) {
      console.log(response.data.url);
      const myArray = response.data.url.split("id=");
      console.log(myArray[1]);
      setCustomer(prevCustomer => ({
        ...prevCustomer,
        picUrl: "https://drive.google.com/thumbnail?id=" + myArray[1]
      }));
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  // Function to trigger click on hidden file input
  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div>
      {customer && <h1>Welcome, {customer.userName}!</h1>}
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-2"></div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="card round-corners mb-2 bg-dark w-100">
              <div className="container">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center mt-3 mb-3">
                    <div className='profile-pic-container d-flex justify-content-center align-items-center'>
                      {/* Hidden file input */}
                      <input
                        type="file"
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                      />
                      {/* Button to trigger file input click */}
                      <button onClick={handleButtonClick} className='btn btn-light'>
                        <img height="150px" src={(customer.picUrl && customer.picUrl) || "https://drive.google.com/thumbnail?id=1lAjGvKnX2rYGq6BWJ0X_8IWce-N1EEbt"} />
                      </button>
                    </div>
                  </div>
                  <div className="col-12 text-light">
                    <hr></hr>
                  </div>
                  <div className="col-12 icon-color">
                    <i className="bi bi-person-bounding-box "></i> &nbsp; {customer.userName} <br></br>
                    <i className="bi bi-lock "></i> &nbsp; {customer.password} <br></br>
                    <i className="bi bi-envelope"></i> &nbsp; {customer.email}
                  </div>
                  <div className="col-12 text-light">
                    <hr></hr>
                  </div>
                  <div className="col-12 mb-3 d-flex justify-content-end">
                    <button className='btn btn-outline-light'>Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-3 col-sm-2"></div>
        </div>
      </div>
    </div>
  );
}
