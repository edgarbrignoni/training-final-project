import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';


class BasicInfo extends React.Component{

	constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="card border-dark mb-3">
                <div className="card-header text-white bg-dark border-dark">BASIC INFO:</div>
                <div className="card-body text-dark">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputName4">First Name *</label>
                                <input type="text" className="form-control" id="inputName4" placeholder=""/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputLastN4">Last Name *</label>
                                <input type="LastN" className="form-control" id="inputLastN4" placeholder=""/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputName44">Email *</label>
                                <input type="username" className="form-control" id="inputName44" placeholder=""/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputLastN44">Password *</label>
                                <input type="password" className="form-control" id="inputLastN44" placeholder=""/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputLastN444">Re-type Password *</label>
                                <input type="password" className="form-control" id="inputLastN444" placeholder=""/>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputAge">Age *</label>
                                <input type="text" className="form-control" id="inputAge"/>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputAge">Height *</label>
                                <input type="text" className="form-control" id="inputHeight" placeholder="in cm."/>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputAge">Weight *</label>
                                <input type="text" className="form-control" id="inputWeight" placeholder="in lbs."/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputOcupationN4">Ocupation</label>
                                <input type="OcupationN" className="form-control" id="inputOcupationN4"/>
                            </div>
                        </div>
                    </form>    
                </div>
                <div className="card-footer bg-transparent border-dark">* This field is required.</div>
            </div>
        );
    }
}

export default BasicInfo;