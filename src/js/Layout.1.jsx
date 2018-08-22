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
            ],
            "workout": [
            ],
            "members": [
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
            },
            "cart":[
            ]
        };
        
        this.actions = {
            "loadSession": (receivedUsername, receivedPassword) => {
                fetch('https://backend-final-project-edgarbrignoni.c9users.io/wp-json/jwt-auth/v1/token', {
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
                .then(data => {
                    this.setState({ session: data });
                    window.sessionStorage.token = data.token;
                    this.actions.loadInitialData();
                    window.location.replace("/member");
                });
                // .catch(error => console.log(error));
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
                  window.location.replace("/member");
                });
                // .catch(error => console.log(error));
                
            },
            "createUser": (
                username,
                login,
                first_name,
                last_name,
                email,
                password
            ) => {
                    
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
                });
                // .catch(error => console.log(error));
            
            },
            "logout": () => this.setState({
                session: {
                }
            }),
            "loadInitialData": () => { 
                
            fetch('https://backend-final-project-edgarbrignoni.c9users.io/wp-json/sample_api/v1/blog')
            .then(response => response.json())
            .then(data => this.setState({ blog: data, isLoading: false }));
            // .catch(error => console.log(error));
            
            fetch('https://backend-final-project-edgarbrignoni.c9users.io/wp-json/sample_api/v1/workout')
            .then(response => response.json())
            .then(data => this.setState({ workout: data, isLoading: false }));
            // .catch(error => console.log(error));
            
            fetch('https://backend-final-project-edgarbrignoni.c9users.io/wp-json/sample_api/v1/member')
            .then(response => response.json())
            .then(data => this.setState({ members: data, isLoading: false }));
            // .catch(error => console.log(error));
            
            fetch('https://my-first-wordpress-emilyv.c9users.io/wp-json/wp/v2/posts?_embed')
            .then(response => response.json())
            .then(data => this.setState({ posts: data, isLoading: false }));
            // .catch(error => console.log(error));
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
                                <Route exact path="/checkout/:theid" component={Checkout} />
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