import React from 'react';
function Footer(){
    return(
        <>
        <div className="container-fluid">
            <footer className="py-5">
                <div className="col-5.33" />
                <div className="col-5.33">
                    <h5 className='txt_black'>AADAN PRADAN</h5>
                    <ul className="nav flex-column">
                    <li className="nav-item mb-2 txt_black"><a href="#" className="nav-link p-0 ">Contact Number: 040 66554433</a></li>
                    <li className="nav-item mb-2 txt_black"><a href="#" className="nav-link p-0 ">Email Us: aadanpradan6608@falsemail.com</a></li>
                    <li className="nav-item mb-2 txt_black"><a href="#" className="nav-link p-0 ">Instagram: aadanpradanofficial</a></li>
                    <li className="nav-item mb-2 txt_black"><a href="#" className="nav-link p-0 ">FAQs: </a></li>
                    </ul>
                </div>
                <div className="col-5.33" />
            </footer>
        </div>
        </>
    );
}
export default Footer;