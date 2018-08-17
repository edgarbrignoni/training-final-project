import React from 'react';
import { Link } from "react-router-dom";
class Featurette extends React.Component{
    
    render(){
        return (
            <div className="container marketing">
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It ll blow your mind.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        <Link style={{ textDecoration: 'none' }} to="/post">
                            <button type="button" className="btn btn-info">READ MORE</button>
                        </Link>
                    </div>
                    <div className="col-md-5">
                        <img 
                            className="featurette-image img-fluid mx-auto" 
                            data-holder-rendered="true" 
                            data-src="holder.js/500x500/auto" 
                            alt="500x500" 
                            src="https://www.correxiko.com/wp-content/uploads/2015/10/correxiko-women-lift-weight.jpg" />
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it s that good. <span className="text-muted">See for yourself.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        <Link style={{ textDecoration: 'none' }} to="/post">
                            <button type="button" className="btn btn-info">READ MORE</button>
                        </Link>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img 
                            className="featurette-image img-fluid mx-auto" 
                            data-holder-rendered="true" 
                            data-src="holder.js/500x500/auto" 
                            alt="500x500" 
                            src="https://www.merrithew.com/imagelib/default-source/store/st-06132-a.jpg" />
                    </div>
                </div>
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                        <Link style={{ textDecoration: 'none' }} to="/post">
                            <button type="button" className="btn btn-info">READ MORE</button>
                        </Link>
                    </div>
                    <div className="col-md-5">
                        <img 
                            className="featurette-image img-fluid mx-auto" 
                            data-holder-rendered="true" 
                            data-src="holder.js/500x500/auto" 
                            alt="500x500" 
                            src="https://nutritionfacts.org/app/uploads/2017/04/Organic-Foods.jpeg" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Featurette;