import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./stores/AppContext.jsx";

import ScrollToTop from "./component/ScrollToTop.jsx";
import Home from "./views/Home.jsx";
import Profile from "./views/Profile.jsx";
import Blog from "./views/Blog.jsx";
import Registration from "./views/Registration.jsx";
import Plans from "./views/Plans.jsx";
import Checkout from "./views/Checkout.jsx";
import Cart from "./views/Cart.jsx";
import Post from "./component/Post.jsx";


class Layout extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
            "blog": [
                {
                    ID: 0,
                    title: "Muscle Building",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "https://legionathletics.com/wp-content/uploads/2016/02/best-shoulder-workouts-bodybuilding.jpg.pagespeed.ce.gqJBfDv4jB.jpg",
                    post: "Workout"
                },
                {
                    ID: 6,
                    title: "Eat Right",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "https://holisticpowersite.files.wordpress.com/2017/02/right-meal-for-weight-loss.jpg?w=600&h=400&crop=1",
                    post: "Nutrition"
                },
                {
                    ID: 2,
                    title: "Increase Strength",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "https://cdn.shopify.com/s/files/1/1602/7323/t/5/assets/promo1.jpg?632522925084405598",
                    post: "Workout"
                },
                {
                    ID: 3,
                    title: "Mountain Pose",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "https://cdn.shopify.com/s/files/1/2289/7641/files/CV0A4202_grande.jpg?v=1527110452",
                    post: "Yoga"
                },
                {
                    ID: 7,
                    title: "Sports Nutrition",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "https://blogs.altru.org/wp-content/uploads/2018/03/Smoothie-600x400.jpg",
                    post: "Nutrition"
                },
                {
                    ID: 1,
                    title: "Fat Loss",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "http://banzweightloss.com/wp-content/uploads/2015/06/fat-loss-tips.jpg",
                    post: "Workout"
                },
                {
                    ID: 4,
                    title: "Downward Dog",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "http://www.veroyoga.com/wp-content/uploads/2017/01/veronica-yoga-downdog.jpg",
                    post: "Yoga"
                },
                {
                    ID: 8,
                    title: "Lose Weight",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/56/244/87622630.jpg",
                    post: "Nutrition"
                },
                {
                    ID: 5,
                    title: "Warrior Pose",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: "https://cdn.shopify.com/s/files/1/1908/5465/files/warrior_pose_o_grande.jpeg?v=1509134214",
                    post: "Yoga"
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
                    ID: 0,
                    title: "Free",
                    main: "Personalized Training",
                    price: 45,
                    image: "https://legionathletics.com/wp-content/uploads/2016/02/best-shoulder-workouts-bodybuilding.jpg.pagespeed.ce.gqJBfDv4jB.jpg",
                    desc: "Achive your fitness goals with personlize training."
                },
                {
                    ID: 1,
                    title: "Title",
                    main: "Yoga Sessions",
                    desc: "Get your body and mind sync with personlize sessions.",
                    price: 45,
                    image: "https://cdn.shopify.com/s/files/1/2289/7641/files/CV0A4202_grande.jpg?v=1527110452"
                },
                {
                    ID: 2,
                    title: "Title",
                    main: "Bundle Yoga and Workout Sessions",
                    desc: "With yoga becoming more and more popular, it's no surprise that bodybuilders can make use of it, get your bundle. ",
                    price: 80,
                    image: "http://www.formulaoz.com/img/BODYBUILDING-DIET-yoga-and-bodybuilding-2.jpg"
                },
                {
                    ID: 3,
                    title: "Title",
                    main: "Training / Yoga / Nutrition",
                    desc: "The only thing standing between you an your goals is a click away, get the body you always wanted.",
                    price: 175,
                    image: "https://blogs.altru.org/wp-content/uploads/2018/03/Smoothie-600x400.jpg"
                }    
            ],
            cart:[]
        };
        
        this.actions = {
            "loadSession": (receivedUsername, receivedPassword) => {
                // fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/jwt-auth/v1/token', {
                // method: 'post',
                // body: JSON.stringify(
                //     {
                //         "username":receivedUsername,
                //         "password":receivedPassword
                //     }),
                // headers: new Headers(
                //     {
                //         'Content-Type':'application/json'
                //     })
                // })
                // .then(response => response.json())
                // .then(data => this.setState({ session: data}))
                // .catch(error => console.log(error));
                
                this.setState(
                    {
                        session: {
                            ID: 1000,
                            user_nicename: receivedUsername,
                            password: receivedPassword,
                            token: "gfdrtu6545hftydhgrhxfh"
                        }
                    }
                );
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
                    <ScrollToTop>
                        <Switch>
                            <Provider value={{state:this.state, actions:this.actions}}>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/home" component={Home} />
                                <Route exact path="/profile" component={Profile} />
                                <Route exact path="/blog" component={Blog} />
                                <Route exact path="/registration" component={Registration} />
                                <Route exact path="/plans" component={Plans} />
                                <Route exact path="/checkout" component={Checkout} />
                                <Route exact path="/cart" component={Cart} />
                                <Route exact path="/post" component={Post} />
                            </Provider>
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </ScrollToTop>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Layout;