import React from 'react';
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

    
class Plans extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="py-2 text-center">PLANS</h1>
                {/*
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">Punny headline</h1>
                        <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple`s marketing pages.</p>
                        <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
                */}
                <div className="container">
                    <div className="row d-md-flex-disable flex-md-equal w-100 mb-md-3 pl-md-3">
                        <div className="bg-dark col-lg-6 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="plans-style bg-light shadow-sm mx-auto"></div>
                        </div>
                        <div className="bg-light col-lg-6 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 p-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="plans-style bg-dark shadow-sm mx-auto"></div>
                        </div>
                    </div>
                    <div className="row d-md-flex-disable flex-md-equal w-100 mb-md-3 pl-md-3">
                        <div className="bg-light col-lg-6 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <div className="my-3 p-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="plans-style bg-dark shadow-sm mx-auto"></div>
                        </div>
                        <div className="bg-dark col-lg-6 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                            <div className="my-3 py-3">
                                <h2 className="display-5">Another headline</h2>
                                <p className="lead">And an even wittier subheading.</p>
                            </div>
                            <div className="plans-style bg-light shadow-sm mx-auto"></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Plans;