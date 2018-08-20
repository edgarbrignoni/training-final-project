import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./stores/AppContext.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx";
import Home from "./views/Home.jsx";
import Member from "./views/Member.jsx";
import Blog from "./views/Blog.jsx";
import Registration from "./views/Registration.jsx";
import Plan from "./views/Plan.jsx";
import Checkout from "./views/Checkout.jsx";
import Cart from "./views/Cart.jsx";
import Post from "./component/Post.jsx";
import Workout from "./component/Workout.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Forgot from "./views/Forgot.jsx";
import Create from "./views/Create.jsx";


class Layout extends React.Component {
    
    constructor() {
        super();
        
        this.state = {
            "blog": [
                // {
                //     ID: 0,
                //     title: "Muscle Building",
                //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                //     image: "https://legionathletics.com/wp-content/uploads/2016/02/best-shoulder-workouts-bodybuilding.jpg.pagespeed.ce.gqJBfDv4jB.jpg",
                //     post: "Workout"
                // },
                // {
                //     ID: 6,
                //     title: "Eat Right",
                //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                //     image: "https://holisticpowersite.files.wordpress.com/2017/02/right-meal-for-weight-loss.jpg?w=600&h=400&crop=1",
                //     post: "Nutrition"
                // },
                // {
                //     ID: 2,
                //     title: "Increase Strength",
                //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                //     image: "https://cdn.shopify.com/s/files/1/1602/7323/t/5/assets/promo1.jpg?632522925084405598",
                //     post: "Workout"
                // },
                // {
                //     ID: 3,
                //     title: "Mountain Pose",
                //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                //     image: "https://cdn.shopify.com/s/files/1/2289/7641/files/CV0A4202_grande.jpg?v=1527110452",
                //     post: "Yoga"
                // },
                // {
                //     ID: 7,
                //     title: "Sports Nutrition",
                //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                //     image: "https://blogs.altru.org/wp-content/uploads/2018/03/Smoothie-600x400.jpg",
                //     post: "Nutrition"
                // },
                // {
                //     ID: 1,
                //     title: "Fat Loss",
                //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                //     image: "http://banzweightloss.com/wp-content/uploads/2015/06/fat-loss-tips.jpg",
                //     post: "Workout"
                // },
                // {
                //     ID: 4,
                //     title: "Downward Dog",
                //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                //     image: "http://www.veroyoga.com/wp-content/uploads/2017/01/veronica-yoga-downdog.jpg",
                //     post: "Yoga"
                // },
                // {
                //     ID: 8,
                //     title: "Lose Weight",
                //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                //     image: "https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/56/244/87622630.jpg",
                //     post: "Nutrition"
                // },
                // {
                //     ID: 5,
                //     title: "Warrior Pose",
                //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                //     image: "https://cdn.shopify.com/s/files/1/1908/5465/files/warrior_pose_o_grande.jpeg?v=1509134214",
                //     post: "Yoga"
                // }
            ],
            "workouts": [
                // {
                //     ID: 0,
                //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                //     muscleType: "Chest",
                //     exerciseType: "Bench Press",
                //     sets: "",
                //     reps: ""
                // }
            ],
            "member": [
                // {
                //     ID: 1,
                //     first_name: "John",
                //     last_name: "Doe",
                //     age: 35,
                //     gender: "Male",
                //     location: "Miami",
                //     subscription_date: 20180723,
                //     height: 170,
                //     weight: 200,
                //     waist: 38,
                //     body_fat: 6,
                //     lean_body_mass: 0,
                //     memberPhoto: "./img/no-photo-headshot.jpg",
                //     current_weight: 180,
                //     current_waist: 36,
                //     current_body_fat: 5,
                //     current_lean_body_mass: 0,
                //     currentPhoto: "./img/no-photo-headshot.jpg",
                //     goal_weight: 170,
                //     goal_waist: 32,
                //     goal_body_fat: 4,
                //     goal_lean_body_mass: 0,
                //     goalPhoto: "./img/no-photo-fullshot.png",
                //     goal_overall: 0
                // }
            ],
            "plan": [
                {
                    ID: 0,
                    title: "Free",
                    main: "Personalized Training",
                    price: 45,
                    image: "https://legionathletics.com/wp-content/uploads/2016/02/best-shoulder-Chests-bodybuilding.jpg.pagespeed.ce.gqJBfDv4jB.jpg",
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
            "session": {
                ID: 1,
                username: "mompy",
                password: "abc123",
                token: "wjer147892akerfdv"
            },
            cart:[
            ]
        };
        
        this.actions = {
            "loadSession": (receivedUsername, receivedPassword) => {
                // fetch('https://backend-final-project-edgarbrignoni.c9users.io/wp-json/jwt-auth/v1/token', {
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
                            user_nicename: "edgarbrignoni",
                            password: "1234",
                            token: "gfdrtu6545hftydhgrhxfh"
                        }
                    }
                );
            },
            "submitRegistration": (
                first_name, 
                last_name, 
                email, 
                password, 
                repassword, 
                age, 
                height, 
                weight, 
                occupation,
                high_cholesterol,
                obese,
                diabetes,
                hypertension,
                heart_attack,
                other_cardiac_disease,
                history_high_cholesterol,
                history_obese,
                history_diabetes,
                history_hypertension,
                history_heart_attack,
                history_other_cardiac_disease,
                fracture,
                luxation,
                sprain,
                column_injury,
                low_back_pain,
                knee_injury,
                repetitive_tear,
                chronic_pain,
                physical_active,
                example_activities,
                times_week,
                purpose,
                goal_description
            ) => {
                console.log(
                    first_name, 
                    last_name, 
                    email, 
                    password, 
                    repassword, 
                    age, 
                    height, 
                    weight, 
                    occupation,
                    high_cholesterol,
                    obese,
                    diabetes,
                    hypertension,
                    heart_attack,
                    other_cardiac_disease,
                    history_high_cholesterol,
                    history_obese,
                    history_diabetes,
                    history_hypertension,
                    history_heart_attack,
                    history_other_cardiac_disease,
                    fracture,
                    luxation,
                    sprain,
                    column_injury,
                    low_back_pain,
                    knee_injury,
                    repetitive_tear,
                    chronic_pain,
                    physical_active,
                    example_activities,
                    times_week,
                    purpose,
                    goal_description
                );
                    
                let url = 'https://backend-final-project-edgarbrignoni.c9users.io/wp-json/sample_api/v1/member/';
                
                var data = {
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: password,
                    repassword: repassword,
                    age: age,
                    height: height,
                    weight: weight, 
                    occupation: occupation,
                    high_cholesterol: high_cholesterol,
                    obese: obese,
                    diabetes: diabetes,
                    hypertension: hypertension,
                    heart_attack: heart_attack,
                    other_cardiac_disease: other_cardiac_disease,
                    history_high_cholesterol: history_high_cholesterol,
                    history_obese: history_obese,
                    history_diabetes: history_diabetes,
                    history_hypertension: history_hypertension,
                    history_heart_attack: history_heart_attack,
                    history_other_cardiac_disease: history_other_cardiac_disease,
                    fracture: fracture,
                    luxation: luxation,
                    sprain: sprain,
                    column_injury: column_injury,
                    low_back_pain: low_back_pain,
                    knee_injury: knee_injury,
                    repetitive_tear: repetitive_tear,
                    chronic_pain: chronic_pain,
                    physical_active: physical_active,
                    example_activities: example_activities,
                    times_week: times_week,
                    purpose: purpose,
                    goal_description: goal_description
                };
                
                fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                        //'Authorization': 'Bearer '+this.state.session.token
                    })
                })
                .then(data => {
                  if (data.status !== 200 ) {
                    throw new Error(data);//INVALID TOKEN
                  }
                  this.actions.loadInitialData();
                  window.location.replace("/home");
                })
                .catch(error => console.log(error));
                
            },
            "createUser": (
                username,
                login,
                first_name,
                last_name,
                email,
                password
            ) => {
                console.log(
                    username,
                    login,
                    first_name,
                    last_name,
                    email,
                    password
                );
                    
                let url = 'https://backend-final-project-edgarbrignoni.c9users.io/wp-json/sample_api/v1/user/';
                
                var data = {
                    username: username,
                    login: email,
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    password: password
                };
                
                fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                        //'Authorization': 'Bearer '+this.state.session.token
                    })
                })
                .then(data => {
                  if (data.status !== 200 ) {
                    alert(email + " registration already exist, please try a different email.");
                    throw new Error(data);//INVALID TOKEN
                  }
                  this.actions.loadInitialData();
                  window.location.replace("/home");
                })
                .catch(error => console.log(error));
                
            },
            "logout": () => this.setState({
                session: {
                }
            }),
            "loadInitialData": () => { 
                
            fetch('https://backend-final-project-edgarbrignoni.c9users.io/wp-json/sample_api/v1/blog')
            .then(response => response.json())
            .then(data => this.setState({ blog: data, isLoading: false }))
            .catch(error => console.log(error));
            
            // fetch('https://backend-final-project-edgarbrignoni.c9users.io/wp-json/sample_api/v1/workout')
            // .then(response => response.json())
            // .then(data => this.setState({ workout: data, isLoading: false }))
            // .catch(error => console.log(error));
              
            // fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/meetups')
            //   .then(response => response.json())
            //   .then(data => this.setState({ meetups: data }))
            //   .catch(error => console.log(error));
            },
            "addPlanToCart": (planId) => {
                let tempCart = this.state.cart;
                
                let arrayWithThePlan = this.state.planshop.filter( (plan) => {
                    return plan.id === planId;  
                });
                
                tempCart.push(arrayWithThePlan[0]);
                this.setState({cart: tempCart});
            }
        };
    }
    
    componentDidMount() {
        this.actions.loadInitialData();
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
                                <Route exact path="/member" component={Member} />
                                <Route exact path="/blog" component={Blog} />
                                <Route exact path="/registration" component={Registration} />
                                <Route exact path="/plan" component={Plan} />
                                <Route exact path="/checkout" component={Checkout} />
                                <Route exact path="/cart" component={Cart} />
                                <Route exact path="/post/:theid" component={Post} />
                                <Route exact path="/workout" component={Workout} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/signup" component={Signup} />
                                <Route exact path="/forgot" component={Forgot} />
                                <Route exact path="/create" component={Create} />
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