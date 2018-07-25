import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Carousel from "../component/Carousel.jsx";
import Card from "../component/Card.jsx";

class MainPage extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Carousel />
                <h5 className="py-2 text-center text-white bg-dark">WORKOUT ROUTINES</h5>
                <div className="container">
                    <div className="row">
                        <Consumer>
                            {({ state }) => (
                                state.routines.map((item, index) => {
                                    return (
                                        <Card 
                                            key={index}
                                            ID={item.ID}
                                            title={item.title}
                                            description={item.description}
                                            image={item.img600x400}
                                        />
                                    );
                                })
                            )}
                        </Consumer>
                    </div>
                </div>
                <h5 className="py-2 text-center text-white bg-dark">YOGA CLASSES</h5>
                <div className="container">
                    <div className="row">
                        <Consumer>
                            {({ state }) => (
                                state.clases.map((item, index) => {
                                    return (
                                        <Card 
                                            key={index}
                                            ID={item.ID}
                                            title={item.title}
                                            description={item.description}
                                            image={item.img600x400}
                                        />
                                    );
                                })
                            )}
                        </Consumer>
                    </div>
                </div>
                <h5 className="py-2 text-center text-white bg-dark">NUTRITION PLANS</h5>
                <div className="container">
                    <div className="row">
                        <Consumer>
                            {({ state }) => (
                                state.plans.map((item, index) => {
                                    return (
                                        <Card 
                                            key={index}
                                            ID={item.ID}
                                            title={item.title}
                                            description={item.description}
                                            image={item.img600x400}
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

export default MainPage;