import './NavBar.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {
    const [hoverBtn, sethoverBtn] = useState(null);
    const [selectedBtn, setSelectedBtn] = useState(null);
    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse add-margins"  id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto  mb-2 mb-lg-0 w-100 d-flex justify-content-around">
                        <li className="nav-item nav-bar-itm itm-link">
                            <Link to="/"
                                onClick={() => { setSelectedBtn(1) }}
                                onMouseEnter={() => { sethoverBtn(1) }}
                                onMouseLeave={() => { sethoverBtn(null) }}
                                className={`nav-link ${(hoverBtn || selectedBtn) && (hoverBtn === 1 || selectedBtn == 1) ? 'selected-txt' : 'un-selected-txt'}`}
                                aria-current="page">
                                Login
                            </Link>
                            {(hoverBtn || selectedBtn) && (hoverBtn === 1 || selectedBtn == 1) && (<div className='shadow-bellow'></div>)}
                        </li>
                        <li className="nav-item itm-link">
                            <Link to="/register"
                                onClick={() => { setSelectedBtn(2) }}
                                onMouseEnter={() => { sethoverBtn(2) }}
                                onMouseLeave={() => { sethoverBtn(null) }}
                                className={`nav-link  ${(hoverBtn || selectedBtn) && (hoverBtn === 2 || selectedBtn == 2) ? 'selected-txt' : 'un-selected-txt'}`}
                                aria-current="page">
                                Reg
                            </Link>
                            {(hoverBtn || selectedBtn) && (hoverBtn === 2 || selectedBtn == 2) && (<div className='shadow-bellow'></div>)}

                        </li>
                        <li className="nav-item itm-link">
                            <a
                                onClick={() => { setSelectedBtn(3) }}
                                onMouseEnter={() => { sethoverBtn(3) }}
                                onMouseLeave={() => { sethoverBtn(null) }}
                                className={`nav-link  ${(hoverBtn || selectedBtn) && (hoverBtn === 3 || selectedBtn == 3) ? 'selected-txt' : 'un-selected-txt'}`}
                                aria-current="page">
                                Home
                            </a>
                            {(hoverBtn || selectedBtn) && (hoverBtn === 3 || selectedBtn == 3) && (<div className='shadow-bellow'></div>)}
                        </li>
                        <li className="nav-item itm-link">
                            <a
                                onClick={() => { setSelectedBtn(4) }}
                                onMouseEnter={() => { sethoverBtn(4) }}
                                onMouseLeave={() => { sethoverBtn(null) }}
                                className={`nav-link  ${(hoverBtn || selectedBtn) && (hoverBtn === 4 || selectedBtn == 4) ? 'selected-txt' : 'un-selected-txt'}`}
                                aria-current="page">Home</a>
                            {(hoverBtn || selectedBtn) && (hoverBtn === 4 || selectedBtn == 4) && (<div className='shadow-bellow'></div>)}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
