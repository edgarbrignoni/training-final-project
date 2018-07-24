import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Carousel from "../component/Carousel.jsx";
import Card from "../component/Card.jsx";

class MainPage extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <div className="container">
                    <Carousel />
                    <div className="row">
                        <div className="col-md-12 col-md-6">
                            <h4 className="py-4 text-center">Workout Routines</h4>
                        </div>
                    </div>
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
                                            image={item.image}
                                        />
                                    );
                                })
                            )}
                        </Consumer>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-md-6">
                            <h4 className="py-4 text-center">Yoga Clases</h4>
                        </div>
                    </div>
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
                                            image={item.image}
                                        />
                                    );
                                })
                            )}
                        </Consumer>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-md-6">
                            <h4 className="py-4 text-center">Nutrition Plans</h4>
                        </div>
                    </div>
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
                                            image={item.image}
                                        />
                                    );
                                })
                            )}
                        </Consumer>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MainPage;