import './NavBar.css';
import { useState, useEffect  } from 'react';
import { Link } from "react-router-dom";


export default function NavBar({navButton}) {
  console.log(navButton);
    const [hoverBtn, sethoverBtn] = useState(null);
    const [selectedBtn, setSelectedBtn] = useState(navButton);
    useEffect(() => {
        //Runs only on the first render
        setSelectedBtn(navButton);
      }, [navButton]);

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
                                <i class="bi bi-boxes"></i> Products
                            </Link>
                            {(hoverBtn || selectedBtn) && (hoverBtn === 1 || selectedBtn == 1) && (<div className='shadow-bellow'></div>)}
                        </li>
                        <li className="nav-item itm-link">
                            <Link to="/login"
                                onClick={() => { setSelectedBtn(2) }}
                                onMouseEnter={() => { sethoverBtn(2) }}
                                onMouseLeave={() => { sethoverBtn(null) }}
                                className={`nav-link  ${(hoverBtn || selectedBtn) && (hoverBtn === 2 || selectedBtn == 2) ? 'selected-txt' : 'un-selected-txt'}`}
                                aria-current="page">
                                <i class="bi bi-box-arrow-in-right"></i> Login
                            </Link>
                            {(hoverBtn || selectedBtn) && (hoverBtn === 2 || selectedBtn == 2) && (<div className='shadow-bellow'></div>)}

                        </li>
                        <li className="nav-item itm-link">
                            <Link to="/register"
                                onClick={() => { setSelectedBtn(3) }}
                                onMouseEnter={() => { sethoverBtn(3) }}
                                onMouseLeave={() => { sethoverBtn(null) }}
                                className={`nav-link  ${(hoverBtn || selectedBtn) && (hoverBtn === 3 || selectedBtn == 3) ? 'selected-txt' : 'un-selected-txt'}`}
                                aria-current="page">
                                <i class="bi bi-box-arrow-in-up"></i> Register
                            </Link>
                            {(hoverBtn || selectedBtn) && (hoverBtn === 3 || selectedBtn == 3) && (<div className='shadow-bellow'></div>)}
                        </li>
                        {/* After login both admin and customer*/}
                        <li className="nav-item itm-link">
                            <Link to="/profile"
                                onClick={() => { setSelectedBtn(4) }}
                                onMouseEnter={() => { sethoverBtn(4) }}
                                onMouseLeave={() => { sethoverBtn(null) }}
                                className={`nav-link  ${(hoverBtn || selectedBtn) && (hoverBtn === 4 || selectedBtn == 4) ? 'selected-txt' : 'un-selected-txt'}`}
                                aria-current="page">
                                    <i class="bi bi-person-circle"></i> User Profile
                                </Link>
                            {(hoverBtn || selectedBtn) && (hoverBtn === 4 || selectedBtn == 4) && (<div className='shadow-bellow'></div>)}
                        </li>
                        {/* After login both admin and customer*/}
                        <li className="nav-item itm-link">
                            <Link to="/manage"
                                onClick={() => { setSelectedBtn(5) }}
                                onMouseEnter={() => { sethoverBtn(5) }}
                                onMouseLeave={() => { sethoverBtn(null) }}
                                className={`nav-link  ${(hoverBtn || selectedBtn) && (hoverBtn === 5 || selectedBtn == 5) ? 'selected-txt' : 'un-selected-txt'}`}
                                aria-current="page">
                                    <i class="bi bi-tools"></i> Manage 
                                </Link>
                            {(hoverBtn || selectedBtn) && (hoverBtn === 5 || selectedBtn == 5) && (<div className='shadow-bellow'></div>)}
                        </li>
                        <li className="nav-item itm-link">
                            <a
                                onClick={() => { setSelectedBtn(6) }}
                                onMouseEnter={() => { sethoverBtn(6) }}
                                onMouseLeave={() => { sethoverBtn(null) }}
                                className={`nav-link  ${(hoverBtn || selectedBtn) && (hoverBtn === 6 || selectedBtn == 6) ? 'selected-txt' : 'un-selected-txt'}`}
                                aria-current="page">
                                   <i class="bi bi-people-fill"></i> Customers
                                </a>
                            {(hoverBtn || selectedBtn) && (hoverBtn === 6 || selectedBtn == 6) && (<div className='shadow-bellow'></div>)}
                        </li>
                        <li className="nav-item itm-link">
                            <a
                                onClick={() => { setSelectedBtn(7) }}
                                onMouseEnter={() => { sethoverBtn(7) }}
                                onMouseLeave={() => { sethoverBtn(null) }}
                                className={`nav-link  ${(hoverBtn || selectedBtn) && (hoverBtn === 7 || selectedBtn == 7) ? 'selected-txt' : 'un-selected-txt'}`}
                                aria-current="page">
                                   <i class="bi bi-graph-up-arrow"></i> Orders
                                </a>
                            {(hoverBtn || selectedBtn) && (hoverBtn === 7 || selectedBtn == 7) && (<div className='shadow-bellow'></div>)}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
