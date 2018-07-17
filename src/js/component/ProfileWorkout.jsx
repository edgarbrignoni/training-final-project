import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class ProfileWorkout extends React.Component{
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="month">
                        <ul>
                            <li className="prev">&#10094;</li>
                            <li className="next">&#10095;</li>
                            <li>Progress<br></br><span>2017</span></li>
                        </ul>
                    </div>
                    <ul className="weekdays">
                        <li>Mo</li>
                        <li>Tu</li>
                        <li>We</li>
                        <li>Th</li>
                        <li>Fr</li>
                        <li>Sa</li>
                        <li>Su</li>
                    </ul>
                    <ul className="days"> 
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li><span className="active">5</span></li>
                    </ul>
                
                    <div className="bodyspace-gptm">
                        <div className="profileUserInfo">
                            <div className="divider"></div>
                            <div className="col-xs-12 col-md-6">
                                <div className="infoSummary">
                                    <a className="edit">Edit</a>
                                    <ul>
                                        <li><span>REAL NAME</span>JOHN</li>
                                        <li><span>AGE</span><div>0</div></li>
                                        <li><span>GENDER</span><div>MALE</div></li>
                                        <li><span>LOCATION</span>--</li>
                                        <li><span>member since</span>Jul 16, 2018</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="overAllGoal">
                                    <a className="edit bbBinder" href="#" data-action="updateModal" data-target="OverallGoal">Edit</a>
                                    <h3>OVERALL GOAL<span></span><span>OTHER</span></h3>
                                    <p className="empty">THIS IS YOUR OVERALL GOAL.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row box-goal-composition has-left-sidebar">
                            <div className="section col-md-6">
                                <a name="cbcp"></a>
                                <div className="bbModuleContainer empty currentBodyComp">
                                    <div className="moduleTitle">
                                        <div className="title">Current Body Composition</div>
                                        <div className="moduleActionContainer">
                                            <div>
                                                <div className="settingsGear bbBinder">
                                                    <div className="menu-dropdown">
                                                        <div className="menu-content">
                                                            <div className="close-icon-container">
                                                                <a href="#" className="close-icon">
                                                                    <div className="icon-image">
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <ul>
                                                                <li className="add">
                                                                    <a data-action="activeRequired" href="#">
                                                                        <div className="icon"></div>Add Goal
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <a name="cbcp"/>
                                        <div className="currentBodyCompContent">
                                            <div className="row noMargin">
                                                <div className="stats col-xs-6 moduleWeightValue bbBinder editable" data-action="updateModal" data-target="Weight">
                                                    <div className="labelValue">
                                                        <h3>Current Weight</h3>
                                                        <span className="number bbBinder currentValueValue currentValueValue" data-action="BB.DataBB.Data" data-target-type="UserUser" data-target-id="weightweight">--</span><span className="unit currentValueUnit">Lbs.</span>
                                                    </div>
                                                </div>
                                                <div className="stats col-xs-6 moduleBodyfatValue bbBinder editable" data-action="updateModal" data-target="BodyFat">
                                                    <div className="labelValue">
                                                        <h3>Current Body Fat</h3>
                                                        <span className="number bbBinder currentValueValue currentValueValue" data-action="BB.DataBB.Data" data-target-type="UserUser" data-target-id="bodyfatbodyFat">--</span><span className="unit currentValueUnit">%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row noMargin visual bbBinder">
                                                <div className="weightVisual col-xs-6">
                                                    <div className="donutChart">
                                                        <canvas id="donutChart" width="280px" height="280px">
                                                        </canvas><div className="vitruvianMan empty"></div>
                                                    </div>
                                                </div>
                                                <div className="weightDetail col-xs-6">
                                                    <div className="stats">
                                                        <h3>Lean Body Mass</h3>
                                                        <span className="number lbm">--</span><span className="unit">Lbs.</span>
                                                    </div>
                                                    <div className="stats">
                                                        <h3>Body Fat</h3>
                                                        <span className="number bodyfat">--</span><span className="unit">Lbs.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section col-md-6">
                                <a name="wbfg"></a>
                                <div className="bbModuleContainer empty weightBodyFatModule">
                                    <div className="moduleTitle">
                                        <div className="title">Weight &amp; Body Fat Goals</div>
                                        <div className="moduleActionContainer">
                                            <div>
                                                <div className="settingsGear bbBinder" >
                                                    <div className="menu-dropdown">
                                                        <div className="menu-content">
                                                            <div className="close-icon-container">
                                                                <a href="#" className="close-icon"><div className="icon-image"></div></a>
                                                            </div>
                                                            <ul>
                                                                <li className="add"><a data-action="activeRequired" href="#"><div className="icon"></div>Add Goal</a></li>
                                                                <li className="graph-3"><a href="https://bodyspace.bodybuilding.com/mba88/profilecp.php?module=progress"><div className="icon"></div>View Goal History</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="weightBodyFatEmptyContent">
                                            <img className="weightBFModalEmpty bbBinder" src="https://common.bbcomcdn.com/BB/WicketBasedModules/WeightBodyFatGoal/images/weightBFModalEmpty.png"/>
                                            <div className="emptyText">
                                                <div className="title">Ready, Set, Goal</div>
                                                <p>Achieving the health and fitness goals of your dreams starts with a goal.  Set your weight and body fat goals and get the tools you need to succeed.</p>
                                            </div>
                                            <div className="buttonContainer">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear-box"></div>
                        <div className="col-md-12">
                            <a name=""></a>
                            <div className="bbModuleContainer rich progressPhotos">
                                <div className="moduleTitle">
                                    <div className="title">Progress Photos</div>
                                    <div className="moduleActionContainer">
                                        <div>
                                            <div className="settingsGear bbBinder">
                                                <div className="menu-dropdown">
                                                    <div className="menu-content">
                                                        <div className="close-icon-container"><a href="#" className="close-icon"><div className="icon-image"></div></a></div>
                                                        <ul>
                                                            <li className="upload"><a data-action="activeRequired" href="https://upload.bodybuilding.com/uploader/progress-photo"><div className="icon"></div>Upload New Progress Photo</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="progress-photos">
                                        <div className="row">
                                            <div className="column col-sm-9">
                                                <div className="row">
                                                    <div className="col-xs-6 column first">
                                                        <div>
                                                            <a className="photo-container">
                                                                <img className="img-responsive" src="https://assets.bodybuilding.com/common/images/default-avatar/Avatar-Male-Default_196x196.jpg"/>
                                                                <div className="image-stats-container">
                                                                    <ul className="imageStats">
                                                                        <li className="imageStats__title">before</li>
                                                                        <li className="imageStats__date-taken"><span></span></li>
                                                                    </ul>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-6 column last">
                                                        <div>
                                                            <a className="photo-container">
                                                                <img className="img-responsive" src="https://assets.bodybuilding.com/common/images/default-avatar/Avatar-Male-Default_196x196.jpg"/>
                                                                <div className="image-stats-container">
                                                                    <ul className="imageStats">
                                                                        <li className="imageStats__title">current</li>
                                                                        <li className="imageStats__date-taken"><span></span></li>
                                                                    </ul>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column thumbnail-pics col-sm-3">
                                                <div className="total-pics-container">
                                                    <span className="total-pics">0</span>
                                                    <span className="photos-taken-since">progress photos taken</span>
                                                </div>
                                                <div className="thumbnails">
                                                    <div className="row">
                                                        <div className="column col-xs-6">
                                                            <div className="empty-public"></div>
                                                        </div>
                                                        <div className="column col-xs-6">
                                                            <div className="empty-public"></div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="column col-xs-6">
                                                            <div className="empty-public"></div>
                                                        </div>
                                                        <div className="column col-xs-6">
                                                            <div className="empty-public"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bbBinder col-md-12 narrowColumn programWidget" data-action="module" data-target="Program">
                            <div className="bbModuleContainer ">
                                <div className="moduleTitle">
                                    <div className="title">PROGRAM</div>
                                    <div className="moduleActionContainer hide">
                                        <div>
                                            <div className="settingsGear bbBinder"></div>
                                        </div>
                                    </div>
                                    <div className="moduleViewContainer ">
                                        <div className="viewModuleAction"></div>
                                    </div>
                                </div>
                                <div className="content emptyState">
                                    <div>
                                        <div className="emptyStateContent">
                                            <div className="col-xs-4 leftIcon">
                                                <div className="largeAddressBook"></div>
                                            </div>
                                            <div className="col-xs-8">
                                                <h3>THIS MEMBER IS NOT CURRENTLY FOLLOWING A PROGRAM</h3>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 emptyStateFooter"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}
