import React from 'react';

import rigoImage from '../../img/rigo-baby.jpg';
import Navbar from "../component/Navbar.jsx";

class Home extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <div className="text-center mt-5">
                    <h1>Hello Rigo!</h1>
                    <p><img src={rigoImage} /></p>
                    <a href="#" className="btn btn-success">If you see this green button... bootstrap is working</a>
                    <p>Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;