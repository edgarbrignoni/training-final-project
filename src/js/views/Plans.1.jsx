import React from 'react';
import 'bootstrap';
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import {Consumer} from "../stores/AppContext.jsx";

    
class Plans extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            //arrObj: [0,1,2,3],
            p_bootstrap: [0,1],
            oldValue: '',
            newValue: ''
        };
        
        this.arrObj = [];   
        this.count = 0;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    getStyleClass () {
        switch (this.count) {
            case 1:
                return {
                    left: "bg-success",
                    right: "bg-light"
                };
            case 2:
                return {
                    left: "bg-dark",
                    right: "bg-light"
                };
            case 3:
                return {
                    left: "bg-dark",
                    right: "bg-light"
                };
            case 4:
                return {
                    left: "bg-success",
                    right: "bg-light"
                };
            }
    }

    pushValueObj(value) {
        this.arrObj.push(value);
        //this.forceUpdate();
        }
        
    callActionState(idPlanshop) {
        return null; 
        }        
        
    returnValueArrays(index, parray, pcounter) {
        return (
            <div className="container">
                <Navbar />
                <div className="d-md-flex flex-md-6 w-100 my-md-3 pl-md-3" key={index}>
                    {parray.map((value, index) => {
                        ++this.count;
                        return (
                            <div className={this.getStyleClass(this.count).left+" mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden"} key={index} >
                                <div className="my-3 py-3">
                                    <h2 className="display-5">{value.name}</h2>
                                    <p className="lead">{value.description}</p>
                                    <p className="lead">Price: ${value.price}</p>
                                    <Consumer>
                                        {
                                            ({actions}) => {
                                                return <button className="btn btn-primary" onClick={() => actions.addPlanToCart(value.id)}>Purchase</button>;
                                                }
                                        }  
                                    </Consumer> 
                                </div>
                                <div className={"cardLoop1 "+this.getStyleClass(this.count).right+" box-shadow mx-auto"}>
                                    <img className="img-responsive" src={value.image} alt="Chania" width="400" height="300" />
                                </div>
                                <style>{'div .cardLoop1 {width: 80%; height: 300px; border-radius: 21px 21px 0 0;'}</style>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
    
    setPlanArticle (index, newValue, counter, pindexOf, plastIndexOf) {
        if ( pindexOf === plastIndexOf-1 ) {
            if ( this.arrObj.length == 0 ) {
                this.pushValueObj(newValue);
                return this.returnValueArrays(index, this.arrObj, counter);
            }
            else {this.pushValueObj(newValue);
                return this.returnValueArrays(index, this.arrObj, counter);
            }
        } 
        else { if ( JSON.stringify(this.arrObj)=='[]' ) {
            this.pushValueObj(newValue);
            return null;
            }
            else {  this.pushValueObj(newValue);
                if ( this.arrObj.length == 2 ) {
                    let parray = this.arrObj;
                    this.arrObj = [];
                    return this.returnValueArrays(index, parray, counter);
                }      
                else {
                    return null; 
                }
            }
        }   
    }
 
    render() {
        let counter = 0;
        return (
            <React.Fragment>
                <div className="containerBody" >
                    <Consumer>
                        {({ state }) => 
                            (state.planshop.map((value, index) => {
                                return (
                                    this.setPlanArticle(
                                        index, 
                                        value, 
                                        ++counter,
                                        state.planshop.indexOf(value),
                                        state.planshop.length
                                    )
                                );
                            }))
                        }        
                    </Consumer>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Plans;