import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import Navbar from "../component/Navbar.jsx";
import Card from "../component/Card.jsx";
import Footer from "../component/Footer.jsx";

class Workout extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <h1 className="py-2 text-center">BLOG</h1>
                <div className="container">
                    <div className="container p-0">
                        <div className="row">
                            <Consumer>
                                {({ state }) => (
                                    state.blog.map((item, index) => {
                                        return (
                                            <Card 
                                                key={index}
                                                ID={item.ID}
                                                title={item.title}
                                                desc={item.desc}
                                                post={item.post}
                                                image={item.image}
                                            />
                                        );
                                    })
                                )}
                            </Consumer>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Workout;