import React, { Component } from 'react'

import { Modal, Form, Input, Button, Header, Message } from 'semantic-ui-react'


/**
 * Connexion component using semantic-ui for ReactJS
 * @author CheikhGwane
 * @since 20/03/2018
 * 
 */

/**
 * Function that use regular expression for testing if the given param is an email or not
 * @param {*String} email 
 * @return {*Boolean}
 */
 function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
/**
 * Function that use the validateEmail function
 * @param {*String} email 
 * @return {*Promise}
 */
  function testMail(email){
      return new Promise((resolve,reject)=>{
         let result = validateEmail(email);
          resolve(result);
      })
  } 

export default class ModalConnexion extends Component {
    
    constructor(props){
      
        super(props);

      this.state = {
          mail : null,
          password : null,
          formError : false,
          isSubmit : false,
      }
    }


    handleMailChange = (e)=>{ this.setState({mail : e.target.value }) }

    handlePassWordChange = (e)=> {this.setState({ password : e.target.value }) } 

    handleSubmit = (e) => { 
       
        e.preventDefault();
       
        this.setState({isSubmit : true});
        setTimeout(() => {
               testMail(this.state.mail).then((result)=>{
            console.log(this.state);
            
           if(!result){
            this.setState({isSubmit : false});
              
            this.setState({formError : true});
             
               setTimeout(() => {
                this.setState({formError : false})
            }, 5000);
           }
        }).catch((err)=>{
            console.log(err)
        }) 

        }, 1000);
     
        }

    render() {

        return (
           <Modal size='tiny' trigger={<Button>Connexion</Button>}>
                <Modal.Header textAlign>Connexion</Modal.Header>
                <Modal.Content  >
                   <Form loading={this.state.isSubmit ? true : false} error={this.state.formError} style={{width : '55%',left:'25%'}} >
                        <Form.Field  >
                            <label htmlFor="">E-mail</label>
                            <Input placeholder='@mail' icon='mail' onChange={this.handleMailChange.bind(this)} required />
                        </Form.Field>
                        <Form.Field >
                            <label htmlFor="">Mot de passe</label>
                            <Input placeholder='Mot de passe' type='password' onChange={this.handlePassWordChange.bind(this)} required />
                        </Form.Field>
                        <Message
                        error
                        header='Erreur lors de votre tentative de connection. Verifier si :'
                        list={[
                            'Les champs sont non vides',
                            'Email et mot de passe sont correct',
                           ]}
                         />
                        <Button color='blue' onClick={this.handleSubmit.bind(this)} >Connection </Button>
                        <br/>
                        <br/>
                        {
                            /* Ajouter lien pour mot de passe oublier */
                        }
                        <a href={''} >Mot de passe oublier?</a>
                     </Form>
                </Modal.Content>
            </Modal>

        )
    }
}