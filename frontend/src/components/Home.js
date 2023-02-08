import React from 'react';
function Home(){
    return(
        <>
        {/* <div className="container p-5 my-5 about">
                <div className="row">
                    <div className="col-sm-4">
                        <h2><b>About Us</b></h2>
                        <p>Aadan Pradan provides young and budding students with a variety of courses provided by different Institutions across your city. If you need a workshop or a lab for your school work, we give access to that too. Boo your workshops and labs through Aadan Pradan and enjoy learning.</p>
                    </div>
                    <div className="col-sm-8">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="./public/assets/images/img1.jpeg" alt="First slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="./public/assets/images/img2.jpeg" alt="Second slide"></img>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="./public/assets/images/img3.jpeg" alt="Third slide"></img>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
        </div> */}
        <div className="container p-5 my-5 about">
            <div className="row">
            <div className="col-sm-4">
                <h2><b>About Us</b></h2>
                <p>Aadan Pradan provides young and budding students with a variety of courses provided by different Institutions across your city. If you need a workshop or a lab for your school work, we give access to that too. Boo your workshops and labs through Aadan Pradan and enjoy learning.</p>
            </div>
            <div className="col-sm-8">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="./public/assets/images/img1.jpeg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./public/assets/images/img2.jpeg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./public/assets/images/img3.jpeg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className="container p-5 my-5 about">
                <h2>Courses</h2>
                <div className="row txt_black">
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>Con 1</h4>
                                <p>Course Name</p>
                                <p>Description: abcd ef ghij klmnopqr stuvwxyz abcdefgh ijklm nopqrstu vwxyz abcdefg hijklmno pqrstu vwxyz</p>
                                <p>Address: </p>
                                <p>contact: </p>
                                <button>More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>Con 2</h4>
                                <p>Course Name</p>
                                <p>Description: abcd ef ghij klmnopqr stuvwxyz abcdefgh ijklm nopqrstu vwxyz abcdefg hijklmno pqrstu vwxyz</p>
                                <p>Address: </p>
                                <p>contact: </p>
                                <button>More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>Con 3</h4>
                                <p>Course Name</p>
                                <p>Description: abcd ef ghij klmnopqr stuvwxyz abcdefgh ijklm nopqrstu vwxyz abcdefg hijklmno pqrstu vwxyz</p>
                                <p>Address: </p>
                                <p>contact: </p>
                                <button>More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h4>Con 4</h4>
                                <p>Course Name</p>
                                <p>Description: abcd ef ghij klmnopqr stuvwxyz abcdefgh ijklm nopqrstu vwxyz abcdefg hijklmno pqrstu vwxyz</p>
                                <p>Address: </p>
                                <p>contact: </p>
                                <button>More</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="container p-5 my-5 my_className about">
                <h2><b>Get Started</b></h2>
                <p>Login or Sign Up to start your Aadan Pradan experience.</p>
                <a href="login.html" className="btn navbar-btn btn-light">LOGIN</a>
                <button className="btn btn-light">SIGNUP</button>
        </div>
        </>
    );
}
export default Home;