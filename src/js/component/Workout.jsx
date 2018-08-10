import React from 'react';
import PropTypes from "prop-types";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

class ComponentName extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="py-2 text-center">Today s Workout</h1>
                <div className="container">
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-md-8 blog-main">
                                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                                    <div className="col-md-6 px-0">
                                        <h1 className="display-4 font-italic">Title of the post</h1>
                                    </div>
                                </div>
                                
                                <div className="blog-post">
                                    <h2 className="blog-post-title">Awesome Post!</h2>
                                    
                                    <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                                    <blockquote>
                                        <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </blockquote>
                                    <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                                    <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                </div>
                                <div className="blog-post">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th scope="col">Chest</th>
                                            </tr>
                                        </thead>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Exercise</th>
                                                <th scope="col">Sets</th>
                                                <th scope="col">Reps</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Bench Press</td>
                                                <td>3</td>
                                                <td>15</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Incline Bench Press</td>
                                                <td>3</td>
                                                <td>15</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Dumbbell Flys</td>
                                                <td>3</td>
                                                <td>15</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default ComponentName;

ComponentName.propTypes = {
    prop_name: PropTypes.type_of_the_prop
};