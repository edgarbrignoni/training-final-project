import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class MainPage extends React.Component{
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-md-6">
                        {/*Carousel Wrapper*/}
                        <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
                            {/*<!--Indicators-->*/}
                            <ol className="carousel-indicators">
                                <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                                <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                            </ol>
                            {/*<!--/.Indicators-->*/}
                            {/*<!--Slides-->*/}
                            <div className="carousel-inner" role="listbox">
                                {/*<!--First slide-->*/}
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="http://via.placeholder.com/800x500" alt="First slide"/>
                                </div>
                                {/*<!--/First slide-->*/}
                                {/*<!--Second slide-->*/}
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="http://via.placeholder.com/800x500" alt="Second slide"/>
                                </div>
                                {/*<!--/Second slide-->*/}
                                {/*<!--Third slide-->*/}
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="http://via.placeholder.com/800x500" alt="Third slide"/>
                                </div>
                                {/*<!--/Third slide-->*/}
                            </div>
                            {/*<!--/.Slides-->*/}
                            {/*<!--Controls-->*/}
                            <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            {/*<!--/.Controls-->*/}
                        </div>
                        {/*<!--/.Carousel Wrapper-->*/}
                    </div>    
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-6">
                        <h4 className="py-4 text-center">Workout Stuff</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade wider mb-4">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" className="card-img-top"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade text-center">
                                {/*<!--Title-->*/}
                                <h4 className="card-title"><strong>Alice Mayer</strong></h4>
                                <h5 className="indigo-text"><strong>Photographer</strong></h5>
                    
                                <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam
                                    rem aperiam.
                                </p>
                                {/*<!--Linkedin-->
                                <a class="icons-sm li-ic"><i class="fa fa-linkedin"> </i></a>
                                <!--Twitter-->
                                <a class="icons-sm tw-ic"><i class="fa fa-twitter"> </i></a>
                                <!--Dribbble-->
                                <a class="icons-sm fb-ic"><i class="fa fa-facebook"> </i></a>*/}
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade narrower mb-4">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" className="card-img-top" alt=""/>
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/.Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade">
                                <h5 className="pink-text"><i className="fa fa-cutlery"></i> Culinary</h5>
                                {/*<!--Title-->*/}
                                <h4 className="card-title">Cheat day inspirations</h4>
                                {/*<!--Text-->*/}
                                <p className="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                                    aliquid ex ea commodi.</p>
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Others/men.jpg" className="card-img-top" alt=""/>
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/.Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade text-center">
                                {/*<!--Title-->*/}
                                <h4 className="card-title"><strong>Billy Cullen</strong></h4>
                                <h5>Web developer</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi
                                    sunt, quod quibusdam.
                                </p>
                                {/*<!--Facebook-->
                                <a type="button" class="btn-floating btn-small btn-fb"><i class="fa fa-facebook"></i></a>
                                <!--Twitter-->
                                <a type="button" class="btn-floating btn-small btn-tw"><i class="fa fa-twitter"></i></a>
                                <!--Google +-->
                                <a type="button" class="btn-floating btn-small btn-dribbble"><i class="fa fa-dribbble"></i></a>*/}
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-6">
                        <h4 className="py-4 text-center">Yoga Stuff</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade wider mb-4">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" className="card-img-top"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade text-center">
                                {/*<!--Title-->*/}
                                <h4 className="card-title"><strong>Alice Mayer</strong></h4>
                                <h5 className="indigo-text"><strong>Photographer</strong></h5>
                    
                                <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam
                                    rem aperiam.
                                </p>
                                {/*<!--Linkedin-->
                                <a class="icons-sm li-ic"><i class="fa fa-linkedin"> </i></a>
                                <!--Twitter-->
                                <a class="icons-sm tw-ic"><i class="fa fa-twitter"> </i></a>
                                <!--Dribbble-->
                                <a class="icons-sm fb-ic"><i class="fa fa-facebook"> </i></a>*/}
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade narrower mb-4">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" className="card-img-top" alt=""/>
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/.Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade">
                                <h5 className="pink-text"><i className="fa fa-cutlery"></i> Culinary</h5>
                                {/*<!--Title-->*/}
                                <h4 className="card-title">Cheat day inspirations</h4>
                                {/*<!--Text-->*/}
                                <p className="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                                    aliquid ex ea commodi.</p>
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Others/men.jpg" className="card-img-top" alt=""/>
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/.Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade text-center">
                                {/*<!--Title-->*/}
                                <h4 className="card-title"><strong>Billy Cullen</strong></h4>
                                <h5>Web developer</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi
                                    sunt, quod quibusdam.
                                </p>
                                {/*<!--Facebook-->
                                <a type="button" class="btn-floating btn-small btn-fb"><i class="fa fa-facebook"></i></a>
                                <!--Twitter-->
                                <a type="button" class="btn-floating btn-small btn-tw"><i class="fa fa-twitter"></i></a>
                                <!--Google +-->
                                <a type="button" class="btn-floating btn-small btn-dribbble"><i class="fa fa-dribbble"></i></a>*/}
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-6">
                        <h4 className="py-4 text-center">Nutrition Stuff</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade wider mb-4">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" className="card-img-top"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade text-center">
                                {/*<!--Title-->*/}
                                <h4 className="card-title"><strong>Alice Mayer</strong></h4>
                                <h5 className="indigo-text"><strong>Photographer</strong></h5>
                    
                                <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam
                                    rem aperiam.
                                </p>
                                {/*<!--Linkedin-->
                                <a class="icons-sm li-ic"><i class="fa fa-linkedin"> </i></a>
                                <!--Twitter-->
                                <a class="icons-sm tw-ic"><i class="fa fa-twitter"> </i></a>
                                <!--Dribbble-->
                                <a class="icons-sm fb-ic"><i class="fa fa-facebook"> </i></a>*/}
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade narrower mb-4">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" className="card-img-top" alt=""/>
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/.Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade">
                                <h5 className="pink-text"><i className="fa fa-cutlery"></i> Culinary</h5>
                                {/*<!--Title-->*/}
                                <h4 className="card-title">Cheat day inspirations</h4>
                                {/*<!--Text-->*/}
                                <p className="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                                    aliquid ex ea commodi.</p>
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Others/men.jpg" className="card-img-top" alt=""/>
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/.Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade text-center">
                                {/*<!--Title-->*/}
                                <h4 className="card-title"><strong>Billy Cullen</strong></h4>
                                <h5>Web developer</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi
                                    sunt, quod quibusdam.
                                </p>
                                {/*<!--Facebook-->
                                <a type="button" class="btn-floating btn-small btn-fb"><i class="fa fa-facebook"></i></a>
                                <!--Twitter-->
                                <a type="button" class="btn-floating btn-small btn-tw"><i class="fa fa-twitter"></i></a>
                                <!--Google +-->
                                <a type="button" class="btn-floating btn-small btn-dribbble"><i class="fa fa-dribbble"></i></a>*/}
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-6">
                        <h4 className="py-4 text-center">Top Articles Stuff</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mb-4">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade wider mb-4">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" className="card-img-top"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade text-center">
                                {/*<!--Title-->*/}
                                <h4 className="card-title"><strong>Alice Mayer</strong></h4>
                                <h5 className="indigo-text"><strong>Photographer</strong></h5>
                    
                                <p className="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam
                                    rem aperiam.
                                </p>
                                {/*<!--Linkedin-->
                                <a class="icons-sm li-ic"><i class="fa fa-linkedin"> </i></a>
                                <!--Twitter-->
                                <a class="icons-sm tw-ic"><i class="fa fa-twitter"> </i></a>
                                <!--Dribbble-->
                                <a class="icons-sm fb-ic"><i class="fa fa-facebook"> </i></a>*/}
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade narrower mb-4">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" className="card-img-top" alt=""/>
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/.Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade">
                                <h5 className="pink-text"><i className="fa fa-cutlery"></i> Culinary</h5>
                                {/*<!--Title-->*/}
                                <h4 className="card-title">Cheat day inspirations</h4>
                                {/*<!--Text-->*/}
                                <p className="card-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                                    aliquid ex ea commodi.</p>
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/*<!--Card-->*/}
                        <div className="card card-cascade">
                            {/*<!--Card image-->*/}
                            <div className="view view-cascade">
                                <img src="https://mdbootstrap.com/img/Photos/Others/men.jpg" className="card-img-top" alt=""/>
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>
                            {/*<!--/.Card image-->*/}
                    
                            {/*<!--Card content-->*/}
                            <div className="card-body card-body-cascade text-center">
                                {/*<!--Title-->*/}
                                <h4 className="card-title"><strong>Billy Cullen</strong></h4>
                                <h5>Web developer</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi
                                    sunt, quod quibusdam.
                                </p>
                                {/*<!--Facebook-->
                                <a type="button" class="btn-floating btn-small btn-fb"><i class="fa fa-facebook"></i></a>
                                <!--Twitter-->
                                <a type="button" class="btn-floating btn-small btn-tw"><i class="fa fa-twitter"></i></a>
                                <!--Google +-->
                                <a type="button" class="btn-floating btn-small btn-dribbble"><i class="fa fa-dribbble"></i></a>*/}
                            </div>
                            {/*<!--/.Card content-->*/}
                        </div>
                        {/*<!--/.Card-->*/}
                    </div>
                </div>
            </div>
        );
    }
}