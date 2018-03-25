import React, { Component } from "react"

import { Carousel } from 'react-bootstrap'

import {Link} from 'react-router-dom'

export default class Caroussel extends Component {

    render() {

     const data = this.props.data ;
     
        return(
            <Carousel>       
                   {  
                data.map((Obj,index) =>{
                
                   return(
                    <Carousel.Item key={index} >                  
                        <img as='link' to={Obj.linkTo} src={Obj.src} width={900} height={500} alt={Obj["alt"]}  />
                        <Carousel.Caption>  
                          <h3> {Obj["titre"]}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>    

                   )
                })

            }
            </Carousel>
        );
    }

}