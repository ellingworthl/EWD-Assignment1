import React from 'react';
import {React_Boostrap_Carousel} from 'react-boostrap-carousel';
import './css/bootstrap.min.css';
import './css/react-boostrap-carousel.css';

  class Slider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return(
        <div >
          <React_Boostrap_Carousel animation={true} className="carousel-fade">
            <div >
              <div  >
                   <img src="../images/animal.jpg" alt="3D"  />
              </div>
                <div className="carousel-caption">
                    <h1>3D Animal</h1>
                </div>
            </div>
            <div style={{height:300,width:"100%",backgroundColor:"aqua"}}>
              456
            </div>
            <div style={{height:300,width:"100%",backgroundColor:"lightpink"}}>
              789
            </div>
            <div style={{height:300,width:"100%",backgroundColor:"SlateGray"}}>
              555
            </div>
          </React_Boostrap_Carousel>
        </div>
      )
}
};

export default Slider;