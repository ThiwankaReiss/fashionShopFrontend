import './Login.css'
export default function Login() {
    return (
        <div className="">
            <div className="container back-ground-image d-flex align-items-center justify-content-center">
                <div className="row ">
                    <div className="col-4 w-100 "></div>
                    <div className="col-4 w-100 d-flex align-items-center justify-content-center">

                        <div class="card1" width="300px">
                            <div class="card2">
                                <form class="form">
                                    <p id="heading">Login</p>
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
                                    <div class="btn">
                                        <button class="button1">
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