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
            "routines": [
                {
                    ID: 1,
                    title: "Muscle Building",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "./img/muscle-building.jpg"
                },
                {
                    ID: 2,
                    title: "Fat Loss",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "./img/fat-loss.jpg"
                },
                {
                    ID: 3,
                    title: "Increase Strength",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "./img/increase-strength.jpg"
                }
            ],
            "clases": [
                {
                    ID: 1,
                    title: "Mountain Pose",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "./img/mountain-pose.jpg"
                },
                {
                    ID: 2,
                    title: "Downward Dog",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "./img/downward-dog.jpg"
                },
                {
                    ID: 3,
                    title: "Warrior Pose",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "./img/warrior-pose.jpg"
                }
            ],
            "plans": [
                {
                    ID: 1,
                    title: "Sports Nutrition",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "./img/sports-nutrition.jpg"
                },
                {
                    ID: 2,
                    title: "Eat Right",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "./img/eat-right.jpg"
                },
                {
                    ID: 3,
                    title: "Lose Weight",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "./img/proper-nutrition.png"
                }
            ],
            "profile": [
                {
                    ID: 1,
                    memberFirstName: "John",
                    memberLastName: "Doe",
                    memberAge: 35,
                    memberGender: "Male",
                    memberLocation: "Miami",
                    memberSubscriptionDate: 20180723,
                    membertHeightCM: 170,
                    membertWeightLBS: 200,
                    membertWaistINCH: 38,
                    membertBodyFatPERC: 6,
                    memberLeanBodyMass: 0,
                    memberPhoto: "./img/no-photo-headshot.jpg",
                    currentWeightLBS: 180,
                    currentWaistINCH: 36,
                    currentBodyFatPERC: 5,
                    currentLeanBodyMass: 0,
                    currentPhoto: "./img/no-photo-headshot.jpg",
                    goalWeightLBS: 170,
                    goalWaistINCH: 32,
                    goalBodyFatPERC: 4,
                    goalLeanBodyMass: 0,
                    goalPhoto: "./img/no-photo-fuulshot.png",
                    goalOverallPERC: 0,
                    bodyFat: 0
                }
            ]
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