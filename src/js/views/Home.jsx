import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Carousel from "../component/Carousel.jsx";
import Featurette from "../component/Featurette.jsx";

class MainPage extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Carousel />
                <Featurette />
                <Footer />
            </React.Fragment>
        );
    }
}

export default MainPage;