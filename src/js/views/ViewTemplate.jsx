import React from 'react';
import { Consumer } from '../stores/AppContext.jsx';
import PropTypes from "prop-types";
import Navbar from '../component/Navbar.jsx';

class ViewName extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Consumer>
                    {({ state }) => (
                        state.whatever_layout_name_in_the_state.map((map_item, map_index) => {
                            return (
                                <Card 
                                    key={map_index}
                                    ID={map_item.ID}
                                    // whatever_post_title={map_item.post_title}
                                    // whatever_day={map_item.day}
                                    // whatever_time={map_item.time}
                                    // whatever_description={map_item.description}
                                    // whatever_location={map_item.location}
                                />
                            );
                        })
                    )}
                </Consumer>
            </React.Fragment>
        );
    }
}

export default ViewName;

ViewName.propTypes = {
    prop_name: PropTypes.type_of_the_prop
};