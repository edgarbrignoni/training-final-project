import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./stores/AppContext.jsx";

import Home from "./views/Home.jsx";
import Profile from "./views/Profile.jsx";


class Layout extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
        };
        
        this.actions = {
        };
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter basename="/training-final-project">
                    <Switch>
                        <Provider value={{state:this.state, actions:this.actions}}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/profile" component={Profile} />
                        </Provider>
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Layout;