import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Card from "../component/Card.jsx";

class YogaView extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="py-2 text-center text-black bg-white">YOGA</h1>
                <p className="py-2 text-center text-black bg-white">“Yoga means addition – addition of energy, strength and beauty to body, mind and soul.”</p>
                <h5 className="py-2 text-center text-white bg-dark">YOGA ARTICLES</h5>
                <div className="container">
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
            </React.Fragment>
        );
    }
}

export default YogaView;