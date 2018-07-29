import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Card from "../component/Card.jsx";

class WorkoutView extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="py-2 text-center text-black bg-white">WORKOUT</h1>
                <p className="py-2 text-center text-black bg-white">“Training gives us an outlet for suppressed energies created by stress and thus tones the spirit just as exercise conditions the body.”</p>
                <h5 className="py-2 text-center text-white bg-dark">WORKOUT ROUTINES</h5>
                <div className="container">
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
            </React.Fragment>
        );
    }
}

export default WorkoutView;