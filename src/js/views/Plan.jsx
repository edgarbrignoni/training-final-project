import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Shop from "../component/Shop.jsx";

    
class Plan extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                {/*
                <h1 className="py-2 text-center">PLANS</h1>
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
                
                    <div className="card-deck mb-3 text-center">
                        <Consumer>
                            {({ state }) => (
                                state.plan.map((item, index) => {
                                    return (
                                        <Shop 
                                            key={index}
                                            ID={item.ID}
                                            title={item.title}
                                            main={item.main}
                                            price={item.price}
                                            desc={item.desc}
                                            image={item.image}
                                        />
                                    );
                                })
                            )}
                        </Consumer>
                    </div>
                        
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Plan;