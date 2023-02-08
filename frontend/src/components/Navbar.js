// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// function Navbar(){
//     return(
//         <>
//         <nav className="navbar navbar-expand-lg fixed-top">
//             <div className="container-fluid">
//                 <div className="navbar-header">
//                     <a className="navbar-brand navbar-text">AADAN PRADAN</a>
//                 </div>
//                 <button id="outer" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#here">
//                     <span id="icon" className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="here">
//                     <ul className="navbar-nav">
//                         <li className="nav-item txt_black">
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li className="nav-item txt_black">
//                             <Link to="/search">Search</Link>
//                         </li>
//                         <li className="nav-item txt_black">
//                             <Link to="/bookings">Bookings</Link>
//                         </li>
//                         <li className="nav-item txt_black">
//                             <Link to="/sprofile">Profile</Link>
//                         </li>
//                     </ul>
//                 </div>
//                 <Link to="/login">Login/Signup</Link>
//             </div>
//         </nav>
//         <Outlet/>
//         </>
//     );
// }
// export default Navbar;

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand navbar-text">AADAN PRADAN</a>
                </div>
                <button id="outer" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#here">
                    <span id="icon" className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="here">
                    <ul className="navbar-nav">
                        <li className="nav-item txt_black">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item txt_black">
                            <Link to="/search">Search</Link>
                        </li>
                        <li className="nav-item txt_black">
                            <Link to="/bookings">Bookings</Link>
                        </li>
                        <li className="nav-item txt_black">
                            <Link to="/sprofile">Profile</Link>
                        </li>
                    </ul>
                </div>
                <Link to="/login">Login/Signup</Link>
            </div>
        </nav>
        </>
    );
}
export default Navbar;