import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./stores/AppContext.jsx";

import Home from "./views/Home.jsx";
import Profile from "./views/Profile.jsx";
import Workout from "./views/Workout.jsx";
import Yoga from "./views/Yoga.jsx";
import Nutrition from "./views/Nutrition.jsx";
import Form from "./views/Form.jsx";
import Plans from "./views/Plans.jsx";
import SubscriptionForm from "./views/SubscriptionForm.jsx";


class Layout extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
            "routines": [
                {
                    ID: 1,
                    title: "Muscle Building",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    img600x400: "https://legionathletics.com/wp-content/uploads/2016/02/best-shoulder-workouts-bodybuilding.jpg.pagespeed.ce.gqJBfDv4jB.jpg"
                },
                {
                    ID: 2,
                    title: "Fat Loss",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    img600x400: "http://banzweightloss.com/wp-content/uploads/2015/06/fat-loss-tips.jpg"
                },
                {
                    ID: 3,
                    title: "Increase Strength",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    img600x400: "https://cdn.shopify.com/s/files/1/1602/7323/t/5/assets/promo1.jpg?632522925084405598"
                }
            ],
            "classes": [
                {
                    ID: 1,
                    title: "Mountain Pose",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    img600x400: "https://cdn.shopify.com/s/files/1/2289/7641/files/CV0A4202_grande.jpg?v=1527110452"
                },
                {
                    ID: 2,
                    title: "Downward Dog",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    img600x400: "http://www.veroyoga.com/wp-content/uploads/2017/01/veronica-yoga-downdog.jpg"
                },
                {
                    ID: 3,
                    title: "Warrior Pose",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    img600x400: "https://cdn.shopify.com/s/files/1/1908/5465/files/warrior_pose_o_grande.jpeg?v=1509134214"
                }
            ],
            "plans": [
                {
                    ID: 1,
                    title: "Eat Right",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    img600x400: "https://holisticpowersite.files.wordpress.com/2017/02/right-meal-for-weight-loss.jpg?w=600&h=400&crop=1"
                },
                {
                    ID: 2,
                    title: "Sports Nutrition",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    img600x400: "https://blogs.altru.org/wp-content/uploads/2018/03/Smoothie-600x400.jpg"
                },
                {
                    ID: 3,
                    title: "Lose Weight",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    img600x400: "https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/56/244/87622630.jpg"
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
                    goalPhoto: "./img/no-photo-fullshot.png",
                    goalOverallPERC: 0,
                    bodyFat: 0
                }
            ],
            "planshop": [
                {
                    id: 1,
                    name: "Personalized Training",
                    price: 45,
                    image: "https://legionathletics.com/wp-content/uploads/2016/02/best-shoulder-workouts-bodybuilding.jpg.pagespeed.ce.gqJBfDv4jB.jpg",
                    description: "Achive your fitness goals with personlize training."
                },
                {
                    id: 2,
                    name: "Yoga Sessions",
                    price: 45,
                    image: "https://cdn.shopify.com/s/files/1/2289/7641/files/CV0A4202_grande.jpg?v=1527110452",
                    description: "Get your body and mind sync with personlize sessions."
                },
                {
                    id: 3,
                    name: "Bundle Yoga and Workout Sessions",
                    price: 80,
                    image: "http://www.formulaoz.com/img/BODYBUILDING-DIET-yoga-and-bodybuilding-2.jpg",
                    description: "With yoga becoming more and more popular, it's no surprise that bodybuilders can make use of it, get your bundle. "
                },
                {
                    id: 4,
                    name: "Training/Yoga/Nutrition",
                    price: 175,
                    image: "https://blogs.altru.org/wp-content/uploads/2018/03/Smoothie-600x400.jpg",
                    description: "The only thing standing between you an your goals is a click away, get the body you always wanted."
                }    
            ],
            cart:[]
        };
        
        this.actions = {
            "loadSession": (receivedUsername, receivedPassword) => {
                fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/jwt-auth/v1/token', {
                method: 'post',
                body: JSON.stringify(
                    {
                        "username":receivedUsername,
                        "password":receivedPassword
                    }),
                headers: new Headers(
                    {
                        'Content-Type':'application/json'
                    })
                })
                .then(response => response.json())
                .then(data => this.setState({ session: data}))
                .catch(error => console.log(error));
            },
            "logout": () => this.setState({
                session: {
                }
            }),
            addPlanToCart: (planId) => {
                let tempCart = this.state.cart;
                
                let arrayWithThePlan = this.state.planshop.filter( (plan) => {
                    return plan.id === planId;  
                });
                
                tempCart.push(arrayWithThePlan[0]);
                this.setState({cart: tempCart});
            }
        };
    }

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Provider value={{state:this.state, actions:this.actions}}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/Home" component={Home} />
                            <Route exact path="/Profile" component={Profile} />
                            <Route exact path="/Workout" component={Workout} />
                            <Route exact path="/Yoga" component={Yoga} />
                            <Route exact path="/Nutrition" component={Nutrition} />
                            <Route exact path="/Form" component={Form} />
                            <Route exact path="/Plans" component={Plans} />
                            <Route exact path="/SubscriptionForm" component={SubscriptionForm} />
                        </Provider>
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Layout;