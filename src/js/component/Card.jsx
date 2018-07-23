import React from 'react';
import PropTypes from "prop-types";

class Card extends React.Component{

	constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    render(){
        return (
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card card-cascade wider mb-4">
                    <div className="view view-cascade">
                        <img src={"" + this.props.image + ""} className="card-img-top"/>
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div className="card-body card-body-cascade">
                        <h4 className="card-title text-center"><strong>{this.props.title}</strong></h4>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

Card.propTypes = {
    ID: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
};