import './Register.css'
export default function Register() {
    return (
        <div className="">
            <div className="container back-ground-image d-flex align-items-end justify-content-end">
                <div className="row ">
                    <div className="col-4 w-100 d-flex align-items-center justify-content-center">
                        <div class="card1">
                            <div class="card2">
                                <form class="form">
                                    <p id="heading">Register</p>
                                    <div class="field1">
                                        <i class="bi bi-person"></i>
                                        <input
                                            type="text"
                                            class="input-field"
                                            placeholder="Username"
                                            autocomplete="off"
                                        />
                                    </div>
                                    <div class="field1">
                                        <i class="bi bi-lock-fill"></i>
                                        <input type="password" class="input-field" placeholder="Password" />
                                    </div>
                                    <div class="field1">
                                        <i class="bi bi-envelope"></i>
                                        <input type="password" class="input-field" placeholder="Email" />
                                    </div>
                                    <div class="btn">
                                        <button class="button1">
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