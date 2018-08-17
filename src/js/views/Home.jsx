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
                <Consumer>
                    {({ state }) => (
                        state.blog.map((item, index) => {
                            return (
                                <Featurette 
                                    key={index}
                                    ID={item.ID}
                                    title={item.post_title}
                                    desc={item.post_content}
                                    // post={item.post_date}
                                    category={item.category[0].name}
                                    // image={item.thumbnail[0]}
                                    image={item.meta_keys.video}
                                />
                            );
                        })
                    )}
                </Consumer>
                <Footer />
            </React.Fragment>
        );
    }
}

export default MainPage;