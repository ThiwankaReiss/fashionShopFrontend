import './Products.css'
export default function Products() {
    return (
        <div className='back-ground-image1 d-flex'>
            <div className="container">
                <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-10  mt-3">
                        <div className="container ">
                            <div className="row glass">
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <p className='text-light topic d-flex align-items-center justify-content-center'>About Us</p>
                                    <h3 className='text-light d-flex text-align-left m-3'>Welcome to Reiss designer-wear <br></br> web portal.</h3>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-13 d-flex align-items-center justify-content-center">
                                    <div class="back">
                                        <div class="login-background">
                                            <div class="box">
                                                <span class="title">User review</span>
                                                <div>
                                                    <strong>Nimal Bandara</strong>
                                                    <p>This experience was awsome</p>
                                                    <span>VALID</span> <span>01/28</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>

                </div>
            </div>
        </div>
    )
}