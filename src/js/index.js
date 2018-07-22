//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
<<<<<<< HEAD
import {MainPage} from './component/MainPage.jsx';
import {ProfileWorkout} from './component/ProfileWorkout.jsx';
import {WorkoutForm} from './component/WorkoutForm.jsx';
//render your react application
ReactDOM.render(
    <WorkoutForm />,
=======
import Layout from './Layout.jsx';

//render your react application
ReactDOM.render(
    <Layout />,
>>>>>>> 23077196f727bbfbaf2bfe023a949eb2ab1480fc
    document.querySelector('#app')
);