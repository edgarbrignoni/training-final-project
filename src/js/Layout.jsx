import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./stores/AppContext.jsx";

import MainPage from "./views/MainPage.jsx";
import ProfileWorkout from "./views/ProfileWorkout.jsx";
import WorkoutForm from "./views/WorkoutForm.jsx";


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
                <BrowserRouter>
                    <Switch>
                        <Provider value={{state:this.state, actions:this.actions}}>
                            <Route exact path="/" component={MainPage} />
                            <Route exact path="/MainPage" component={MainPage} />
                            <Route exact path="/ProfileWorkout" component={ProfileWorkout} />
                            <Route exact path="/WorkoutForm" component={WorkoutForm} />
                        </Provider>
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Layout;