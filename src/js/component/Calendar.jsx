import React from 'react';
import { Consumer } from "../stores/AppContext.jsx";
import PropTypes from "prop-types";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";

class Calendar extends React.Component{

	constructor(props){
        super(props);
        this.state = {
            foo:[]
        };
    }
    
    render(){
        return (
            <React.Fragment>
                <Navbar />
                <p>&nbsp;</p>
                {/*
                <h1 className="py-2 text-center">POST</h1>
                */}
                <Consumer>
                    {({ state }) => {
                        const post = state.members.find( post => post.ID === parseInt(this.props.match.params.theid) );
                        if (!post) { 
                            return(<p>Loading...</p>);
                        } 
                        else {
                            let monkey = [];
                            for (var i=0; i < post.meta_keys.monday.length; i++) {
                                monkey[i] = state.workout.find( monkey => monkey.ID === parseInt(post.meta_keys.monday[i]));
                            }
                            if (!monkey) {
                                console.log('loading');
                            } else {
                                // var result = Object.keys(monkey).map(function(key) {
                                //   return [Number(key), monkey[key]];
                                // });
                                // console.log("RESULT", result);
                                var selected = [];
                                // console.log(selected);
                                // console.log(selected.ID);
                                // console.log(selected.meta_keys.muscle_type);
                                
                                monkey.map((item, index) => {
                                    selected.push(item.ID);
                                });
                                console.log(selected);
                                selected.map((item,index) => {
                                    return (
                                        <h1 key={index}>{item}</h1>
                                    );
                                });
                            }
                            // {
                            //     const mike = state.workout.find( mike => mike.ID === parseInt(post.meta_keys.monday[0]) );
                            //     if (!mike) {
                            //         console.log("loading");
                            //     } else {
                                    
                            //         console.log("mike ", mike.meta_keys.muscle_type);
                            //     }
                            // }
                            // return (
                            //     <div className="container">
                            //         <div className="container p-0">
                            //             <div className="row">
                            //                 <div className="col-md-8 blog-main-disable">
                            //                     <br />
                            //                     <div className="col-md-12 blog-post">
                            //                         <h2 className="blog-post-title">{post.post_title}</h2>
                            //                         <p className="blog-post-meta">
                            //                             {Moment(post.post_date).format("dddd, MMMM Do YYYY")} by AUTHOR.ID
                            //                         </p>
                            //                         <p>
                            //                             {post.meta_keys.monday[0]}
                            //                         </p>
                            //                         <Link style={{ textDecoration: 'none' }} to="/blog">
                            //                             <button type="button" className="btn btn-info">SEE MORE POSTS</button>
                            //                         </Link>
                            //                         <p></p>
                            //                     </div>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </div>
                            // );
                        }
                    }}
                </Consumer>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Calendar;

Calendar.propTypes = {
    match: PropTypes.object
};