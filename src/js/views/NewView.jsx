import React from 'react';
import { Consumer } from '../stores/AppContext.jsx';
import PropTypes from "prop-types";
import Navbar from '../component/Navbar.jsx';

class NewView extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
            </React.Fragment>
        );
    }
}

export default NewView;

NewView.propTypes = {
    prop_name: PropTypes.type_of_the_prop
};