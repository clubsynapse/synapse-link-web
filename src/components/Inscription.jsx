import React, { Component } from "react";

import {
  Form,
  Input,
  Button,
  Header,
  Message,
  Label,
  Icon,
} from "semantic-ui-react";

/**
 * Inscription component using semantic-ui for ReactJS
 * @author CheikhGwane
 * @since 20/03/2018
 *
 */

 export default class Inscription extends Component{
     
    constructor(props) {
         super(props);
         
     }
     
     render() {
         return(
             <Form>
                 <Form.Field>
                     <label htmlFor="">Mail/téléphone</label>
                     <Input required  />
                 </Form.Field>
             </Form>
         );
     }
 }
