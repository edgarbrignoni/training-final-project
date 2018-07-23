import React from 'react';
import PropTypes from "prop-types";

class Carousel extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="row">
                <div className="col-md-12 col-md-6">
                    {/* Carousel Wrapper */}
                    <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
                        {/* Indicators */}
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                            <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                        </ol>
                        {/* Indicators */}
                        {/* Slides */}
                        <div className="carousel-inner" role="listbox">
                            {/* First slide */}
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="./img/workout.jpg" alt="First slide"/>
                            </div>
                            {/* First slide */}
                            {/* Second slide */}
                            <div className="carousel-item">
                                <img className="d-block w-100" src="./img/yoga.jpg" alt="Second slide"/>
                            </div>
                            {/* /Second slide */}
                            {/* Third slide */}
                            <div className="carousel-item">
                                <img className="d-block w-100" src="./img/nutrition.jpg" alt="Third slide"/>
                            </div>
                            {/* /Third slide */}
                        </div>
                        {/* Slides */}
                        {/* Controls */}
                        <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        {/* Controls */}
                    </div>
                    {/* Carousel Wrapper */}
                </div>
            </div>
        );
    }
}

export default Carousel;

Carousel.propTypes = {
    prop_name: PropTypes.string
};