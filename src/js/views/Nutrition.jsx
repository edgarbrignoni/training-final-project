import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Card from "../component/Card.jsx";

class NutritionView extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="py-2 text-center text-black bg-white">NUTRITION</h1>
                <p className="py-2 text-center text-black bg-white">“To eat is a necessity, but to eat intelligently is an art.”</p>
                <h5 className="py-2 text-center text-white bg-dark">NUTRITION PLANS</h5>
                <div className="container">
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
            </React.Fragment>
        );
    }
}

export default NutritionView;