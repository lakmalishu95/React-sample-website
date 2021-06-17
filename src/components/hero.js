import React from "react";
import "../App.css";

//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';

//import carousel 
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

//import images
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'

//this is hero mean without header other parts
function Hero () {
    return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
              <h1 class="h1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
              <p class="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisbr <br /> rem officiis autem
                  nulla illum. Dolorum corporis ab alias,<br /> similique id nesciunt. In illum suscipit nihil
                    aliquid molestias, cum ratione ipsa.</p><br />
          </div>       
          <Form className="formcss">
              <Form.Group controlId="formBasicEmail">
              
                <Form.Control type="email" placeholder="Enter email"/><br />
                <Button  variant="primary">Get Start</Button> 
                <Form.Text className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Form.Text>
              </Form.Group>           
          </Form>
        </div>
      </div> 
      
      <div className="container-fluid">
        <div className="row">
          <div className="Hero" >
            <Carousel>
              <div>
                <img src={img1} />                 
              </div>
              <div>
                <img src={img2} />        
              </div>
              <div>
                <img src={img3} />     
              </div>
            </Carousel>
          </div>
        </div>
      </div><hr /><br /><br />

      <div className="container-fluid" >
        <div className="item1">
          <div className="row" >
            <div className= "col-6">
              <div className="item1">
                  <h2 >headling</h2>
                  <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deleniti ut. Facilis,
                    voluptatibus facere, sint ab mollitia amet a adipisci, ipsum architecto minus vel tempora soluta
                      voluptas id et esse?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deleniti ut. Facilis,
                    voluptatibus facere, sint ab mollitia amet a adipisci, ipsum architecto minus vel tempora soluta
                      voluptas id et esse</h6>
                  <Button variant="outline-primary">Start Your Brand</Button>
                  <hr />
                  <h2 >headling</h2>
                  <h6 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deleniti ut. Facilis,
                    voluptatibus facere, sint ab mollitia amet a adipisci, ipsum architecto minus vel tempora soluta
                      voluptas id et esse?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deleniti ut. Facilis,
                    voluptatibus facere, sint ab mollitia amet a adipisci, ipsum architecto minus vel tempora soluta
                      voluptas id et esse</h6>
                  <Button variant="outline-danger">Start Your Brand</Button>
              </div>
            </div><hr />
            <div className= "col-6">
              <div className="item2">
                <div className="row">
                  <img src={img2} class="img-fluid" />
                </div>
              </div>

            </div>  
          </div>
          </div>
      </div><br /><br /><br />
      
    </>

    );

}

export default Hero;