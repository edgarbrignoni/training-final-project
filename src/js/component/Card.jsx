import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Card extends React.Component{

	constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    render(){
        return (
            <div className="col-md-4 mt-2 mb-4">
                <div className="card border-0 card-cascade wider">
                    <div className="view view-cascade">
                        <iframe 
                            id="ytplayer" 
                            type="text/html" 
                            width={"100%"} 
                            src={"" + this.props.image + "?showinfo=0&autoplay=1&controls=0"}
                            frameBorder="0">
                        </iframe>
                        {/*
                        <img src={"" + this.props.image + ""} className="card-img-top"/>
                        */}
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div className="card-body card-body-cascade">
                        <h4 className="card-title text-center"><strong>{this.props.title}</strong></h4>
                    </div>
                    <div className="card-text p-3 bg-transparent">{this.props.desc}</div>
                    <div className="card-footer bg-transparent border-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <strong>{this.props.post}</strong>
                            </div>
                            <div className="col-lg-6 mt-2">
                                <Link style={{ textDecoration: 'none' }} to="/post">
                                    <button type="button" className="btn btn-info">READ MORE</button>
                                </Link>
                            </div>
                        </div>
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
    desc: PropTypes.string,
    image: PropTypes.string,
    post: PropTypes.string
};