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
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Ipsum nunc aliquet bibendum enim facilisis. Viverra mauris in aliquam sem fringilla ut.",
                    image: "./img/muscle-building.jpg"
                },
                {
                    ID: 2,
                    title: "Fat Loss",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Porttitor eget dolor morbi non arcu risus. Ultrices vitae auctor eu augue ut.",
                    image: "./img/fat-loss.jpg"
                },
                {
                    ID: 3,
                    title: "Increase Strength",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum. Massa placerat duis ultricies lacus sed turpis. Sed turpis tincidunt id aliquet risus. Curabitur vitae nunc sed velit.",
                    image: "./img/increase-strength.jpg"
                }
            ],
            "clases": [
                {
                    ID: 1,
                    title: "Mountain Pose",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Ipsum nunc aliquet bibendum enim facilisis. Viverra mauris in aliquam sem fringilla ut.",
                    image: "./img/mountain-pose.jpg"
                },
                {
                    ID: 2,
                    title: "Downward Dog",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Porttitor eget dolor morbi non arcu risus. Ultrices vitae auctor eu augue ut.",
                    image: "./img/downward-dog.jpg"
                },
                {
                    ID: 3,
                    title: "Warrior Pose",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum. Massa placerat duis ultricies lacus sed turpis. Sed turpis tincidunt id aliquet risus. Curabitur vitae nunc sed velit.",
                    image: "./img/warrior-pose.jpg"
                }
            ],
            "plans": [
                {
                    ID: 1,
                    title: "Sports Nutrition",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus et malesuada. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Ipsum nunc aliquet bibendum enim facilisis. Viverra mauris in aliquam sem fringilla ut.",
                    image: "./img/sports-nutrition.jpg"
                },
                {
                    ID: 2,
                    title: "Eat Right",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Porttitor eget dolor morbi non arcu risus. Ultrices vitae auctor eu augue ut.",
                    image: "./img/eat-right.jpg"
                },
                {
                    ID: 3,
                    title: "Lose Weight",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum. Massa placerat duis ultricies lacus sed turpis. Sed turpis tincidunt id aliquet risus. Curabitur vitae nunc sed velit.",
                    image: "./img/proper-nutrition.png"
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