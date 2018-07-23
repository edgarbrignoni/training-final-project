import React from 'react';
import { Consumer } from '../stores/AppContext.jsx';
import PropTypes from "prop-types";
import Navbar from '../component/Navbar.jsx';

//import ViewName from '../views/ViewFileName.jsx';

//import ComponentName from '../component/ComponentFileName.jsx';

class ViewName extends React.Component{

	constructor(props){
        super(props);
        this.state = {
            //parameter_name: parameter_initial_value
        };
    }
    
    render(){
        return (
            <React.Fragment>
                {/* in react you can add more components using this tag notation <ComponentName /> i.e. <Navbar />*/}
                <Navbar />
                {/* in react you can create a loop and consume values */}
                <Consumer>
                    {({ state }) => (
                        state.events.map((map_item, map_index) => {
                            return (
                                // we can include a component with props inside the loop
                                <ComponentName 
                                    key={map_index}
                                    ID={map_item.ID}
                                    // whatever_post_title={map_item.post_title}
                                    // whatever_day={map_item.day}
                                    // whatever_time={map_item.time}
                                    // whatever_description={map_item.description}
                                    // whatever_location={map_item.location}
                                />
                            ); // this closes the return of the arrow function in javascript
                        }) // this closes the arrow function still in pure javascript
                    )} {/* closes the state returning me back to react */}
                </Consumer>
            </React.Fragment>
        );
    }
}

export default ViewName;

ViewName.propTypes = {
    prop_name: PropTypes.type_of_the_prop
};