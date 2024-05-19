import NavBar from '../../components/NavBar/NavBar'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

import { useSnapshot } from 'valtio'
import state from '../../store'
import PicUpload from '../../components/PicUpload/PicUpload'


export default function Login() {
    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    // const { setCustomer } = useCustomer();
    const snap = useSnapshot(state);
    

    const submit = async (data) => {
        console.log(data);
        Swal.fire('Please wait')
        Swal.showLoading();
        axios.post('http://localhost:8080/auth', data)
            .then(function (response) {
                console.log(response.data);
                
                if (response.data != null && response.data !='') {
                    
                    state.customer=response.data;
                    Swal.fire({
                        title: "Sucess!",
                        text: "Registration Sucessfully!",
                        icon: "success"
                    });
                    Swal.hideLoading();
                    if(snap.selectedDress==null){
                        state.navButton=4;
                        navigate('/profile')            
                    }else if(state.situation=="customize"){
                        state.navButton=5;
                        navigate('/manage') 
                    }
                        
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Failed!",
                        text: "Wrong credentials",
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

        <div className='back-ground-image2 d-flex align-items-center justify-content-center'>
            <div className="container" width="100%">
                <div className="row ">
                    <div className="col-4 w-100 "></div>
                    <div className="col-4 w-100 d-flex align-items-center justify-content-center">

                        <div class="card1" width="300px">
                            <div class="card2">
                                <form class="form">
                                    <p id="heading">Login</p>
                                    <div className={`field1 ${errors.userName ? 'has-error' : ''}`}>
                                        <i class="bi bi-person"></i>
                                        <input
                                            {...register("userName", { required: true })}
                                            type="text"
                                            class="input-field"
                                            placeholder={errors.userName ? "User name cannot be emty" : "User Name"}
                                            autocomplete="off"
                                        />
                                    </div>
                                    <div className={`field1 ${errors.password ? 'has-error' : ''}`}>
                                        <i class="bi bi-lock-fill"></i>
                                        <input
                                        {...register("password", { required: true })}
                                            type="password"
                                            class="input-field"
                                            placeholder={errors.password ? "Password cannot be emty" : "Password Name"}
                                            autocomplete="off"
                                        />
                                    </div>
                                    <div>
                                        <button onClick={handleSubmit(submit)} class="button1">
                                            <i class="bi bi-box-arrow-in-right"></i> &nbsp;Sign In
                                        </button>

                                        <button class="button2">
                                            <i class="bi bi-box-arrow-in-up"></i> &nbsp; Sign Up
                                        </button>
                                    </div>
                                    <button class="button3">Forgot Password &#x1f914;</button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="col-4 w-100"></div>
                   
                    
                </div>
            </div>
        </div>


    )
}