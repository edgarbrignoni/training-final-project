import React from 'react';
import { Link } from "react-router-dom";
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
                <h1 className="py-2 text-center">POST</h1>
                <div className="container">
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-md-8 blog-main">
                                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                                    <div className="col-md-6 px-0">
                                        <h1 className="display-4 font-italic">Title of the post</h1>
                                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what`s most interesting in this post`s contents.</p>
                                    </div>
                                </div>
                                
                                <div className="blog-post">
                                    <h2 className="blog-post-title">Awesome Post!</h2>
                                    <p className="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>
                                    
                                    <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                                    <blockquote>
                                        <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </blockquote>
                                    <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                                    <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                    <Link style={{ textDecoration: 'none' }} to="/blog">
                                        <button type="button" className="btn btn-info">SEE MORE POSTS</button>
                                    </Link>
                                    <p></p>
                                </div>
                            </div>
                            <aside className="col-md-4 blog-sidebar">
                                <div className="p-3 mb-3 bg-light rounded">
                                    <h4 className="font-italic">About</h4>
                                    <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                                </div>
                                <div className="p-3">
                                    <h4 className="font-italic">Archives</h4>
                                    <ol className="list-unstyled mb-0">
                                        <li><a href="#">March 2014</a></li>
                                        <li><a href="#">February 2014</a></li>
                                        <li><a href="#">January 2014</a></li>
                                        <li><a href="#">December 2013</a></li>
                                        <li><a href="#">November 2013</a></li>
                                        <li><a href="#">October 2013</a></li>
                                        <li><a href="#">September 2013</a></li>
                                        <li><a href="#">August 2013</a></li>
                                        <li><a href="#">July 2013</a></li>
                                        <li><a href="#">June 2013</a></li>
                                        <li><a href="#">May 2013</a></li>
                                        <li><a href="#">April 2013</a></li>
                                    </ol>
                                </div>
                                <div className="p-3">
                                    <h4 className="font-italic">Elsewhere</h4>
                                    <ol className="list-unstyled">
                                        <li><a href="#">GitHub</a></li>
                                        <li><a href="#">Twitter</a></li>
                                        <li><a href="#">Facebook</a></li>
                                    </ol>
                                </div>
                            </aside>
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