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
                <div className="container">
                    <h5 className="py-2 text-center text-white bg-dark rounded">WORKOUT ROUTINES</h5>
                    <div className="container p-0">
                        <div className="row">
                            <Consumer>
                                {({ state }) => (
                                    state.workout.map((item, index) => {
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
                    <h5 className="py-2 text-center text-white bg-dark rounded">YOGA ARTICLES</h5>
                    <div className="container p-0">
                        <div className="row">
                            <Consumer>
                                {({ state }) => (
                                    state.yoga.map((item, index) => {
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
                    <h5 className="py-2 text-center text-white bg-dark rounded">NUTRITION PLANS</h5>
                    <div className="container p-0">
                        <div className="row">
                            <Consumer>
                                {({ state }) => (
                                    state.nutrition.map((item, index) => {
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
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default MainPage;