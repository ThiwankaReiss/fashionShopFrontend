import { useState } from 'react'; // Import useState hook

import './Profile.css';
import axios from 'axios';
import { useSnapshot } from 'valtio'
import state from '../../store'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
export default function Profile() {
  const snap = useSnapshot(state);
  const [customer, setCustomer] = useState(snap.customer);
  const { handleSubmit, register, reset, formState: { errors } } = useForm();

  const [updateEmail, setUpEmail] = useState(snap.customer.email);
  const [updateName, setUpName] = useState(snap.customer.userName);
  const [updatePassword, setUpPassword] = useState(snap.customer.password);
  const handleImageChange = (e) => {
    const file = e.target.files[0];


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
        updateCustomer("https://drive.google.com/thumbnail?id=" + myArray[1]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function updateCustomer(stringUrl) {

    axios.post('http://localhost:8080/customer', {
      id: customer.id,
      userName: customer.userName,
      email: customer.email,
      password: customer.password,
      status: customer.status,
      picUrl: stringUrl
    }
    )
      .then(function (response) {
        console.log(response.data);
        state.customer = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Function to trigger click on hidden file input
  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };
  const submit = async (data) => {
    console.log(data);

    data.id=customer.id;
    data.picUrl=customer.picUrl;
    axios.post('http://localhost:8080/customer', data)
      .then(function (response) {
        console.log(response.data);
        if (response.data.id != null) {
          Swal.fire({
            title: "Sucess!",
            text: "Registration Sucessfully!",
            icon: "success"
          });
          Swal.hideLoading();
          state.customer = response.data;
          setCustomer(response.data);
        } else if (response.data.userName == "present") {
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: "User name is already present!",
          });
          Swal.hideLoading();
        } else if (response.data.password == "present") {
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: "Password is already present",
          });
          Swal.hideLoading();
        } else if (response.data.email == "present") {
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: "Email is already present",
          });
          Swal.hideLoading();
        }

        console.log(response);


      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='back-ground-image3'>
      
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-2"></div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="card round-corners mb-2 mt-4 bg-dark w-100">
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
                    <button className='btn btn-outline-light' data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-3 col-sm-2"></div>
        </div>
      </div>


      {/* Modal */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label class="form-label">User Name</label>
              <input
                type="text"
                class="form-control"
                autoComplete='off'
                {...register("userName", { required: true })}
                placeholder={errors.userName ? "Enter user name correctly" : customer.userName}
                value={updateName}
                onClick={() => { setUpName(null) }}

              />
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                autoComplete='off'
                placeholder={errors.password ? "Enter password correctly" : customer.password}
                {...register("password", { required: true })}
                value={updatePassword}
                onClick={() => { setUpPassword(null) }}

              />
              <label class="form-label">Email</label>
              <input
                type="text"
                class="form-control"
                autoComplete='off'
                value={updateEmail}
                onClick={() => { setUpEmail(null) }}

                {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                placeholder={errors.email && errors.email.type == 'required' ? "Email cannot be blank" : customer.email}
              />
              {errors.email && errors.email.type == 'pattern' && <span> &nbsp;&nbsp;Enter email correctly</span>}
              <div class="form-text">
                Please click on the profile pic if it is needded to be changed.
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onClick={handleSubmit(submit)} class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
