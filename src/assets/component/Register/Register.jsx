import { useState } from 'react';
import './Register.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Register() {

    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const submit = async (data) => {
        console.log(data);
        Swal.fire('Please wait')
        Swal.showLoading();
        axios.post('http://localhost:8080/customer', data)
          .then(function (response) {
            console.log(response.data);
            if(response.data.id !=null){
                Swal.fire({
                    title: "Sucess!",
                    text: "Registration Sucessfully!",
                    icon: "success"
                });
                Swal.hideLoading();
            }else if(response.data.userName =="present"){
                Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    text: "User name is already present!",
                  });
                  Swal.hideLoading();
            }else if(response.data.password =="present"){
                Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    text: "Password is already present",
                  });
                  Swal.hideLoading();
            }else if(response.data.email =="present"){
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
        <div className="">
            <div className="container back-ground-image d-flex align-items-end justify-content-end">
                <div className="row ">
                    <div className="col-4 w-100 d-flex align-items-center justify-content-center">
                        <div class="card1">
                            <div class="card2">
                                <form class="form">
                                    <p id="heading">Register</p>
                                    <div className={`field1 ${errors.userName ? 'has-error' : ''}`}>
                                        <i class="bi bi-person"></i>
                                        <input
                                            {...register("userName", { required: true })}
                                            type="text"
                                            class="input-field"
                                            placeholder={errors.userName ? "Enter user name correctly" : "User Name"}
                                            autoComplete='off'

                                        />
                                    </div>
                                    <div className={`field1 ${errors.password ? 'has-error' : ''}`}>
                                        <i class="bi bi-lock-fill"></i>
                                        <input
                                            {...register("password", { required: true })}
                                            type="password"
                                            class="input-field"
                                            placeholder={errors.password ? "Enter password correctly" : "Password"}

                                        />
                                    </div>
                                    <div className={`field1 ${errors.email ? 'has-error' : ''}`}>
                                        <i className="bi bi-envelope"></i>
                                        <input
                                            {...register("email", { required: true , pattern : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}
                                            type="text"
                                            className="input-field"
                                            placeholder={errors.email && errors.email.type=='required'? "Email cannot be blank" : "Email"}
                                            autoComplete='off'
                                        />

                                    </div>
                                    {errors.email && errors.email.type=='pattern'&& <span className="error-message"> &nbsp;&nbsp;Enter email correctly</span>}
                                    <div class="btn">
                                        <button onClick={handleSubmit(submit)} class="button1">
                                            <i class="bi bi-box-arrow-in-right"></i> &nbsp;Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="col-4 w-100 mb-5"></div>
                </div>
            </div>
        </div>

    )
}