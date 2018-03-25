import React, { Component } from 'react'

import { Modal, Form, Input, Button, Header, Message,Label ,Icon } from 'semantic-ui-react'


/**
 * Inscription component using semantic-ui for ReactJS
 * @author CheikhGwane
 * @since 20/03/2018
 * 
 */


const options = [
  { key: 'etu', text: 'Etudiant', value: 'ETUDIANT' },
  { key: 'prof', text: 'Professeur', value: 'PROFESSEUR' },
  { key: 'entr', text: 'Entreprise', value: 'ENTREPRISE' },
]
function EtudiantSubscriptionComponent(){
    return(
        <div>

        </div>
    );
 }
export default class ModalInscription extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            mail : null,
            password : null,
            formError : false,
            isSubmit : false,
            filePath : '',
        }
    }
    
    handleMailChange = (e)=>{ this.setState({mail : e.target.value }) }

    handlePassWordChange = (e)=> {this.setState({ password : e.target.value }) } 

    handleSubmit = (e) => { 
        e.preventDefault();
    
        this.setState({isSubmit : true});
         setTimeout(() => {
            this.setState({isSubmit :false});
         }, 2000);     
        }

    render() {
        return (
            <Modal size='tiny' trigger={<Button>Connexion</Button>}>
            <Modal.Header >Connexion</Modal.Header>
            <Modal.Content  >
               <Form loading={this.state.isSubmit ? true : false} error={this.state.formError} style={{width : '65%',left:'20%'}} >
                    <Form.Field  >
                        <label htmlFor="email">E-mail</label>
                        <Input placeholder='@mail' icon='mail' id='email' onChange={this.handleMailChange.bind(this)} required />
                    </Form.Field>
                    <Form.Field  >
                        <label htmlFor="phone">Téléphone</label>
                       <Input placeholder='Ex : +2211234567' id='phone' icon='phone' />
                    </Form.Field>
                    <Form.Field >
                        <label htmlFor="password">Mot de passe</label>
                        <Input id="password" placeholder='Mot de passe' type='password' icon='key' onChange={this.handlePassWordChange.bind(this)} required />
                    </Form.Field>
                    <Form.Field width={16}>
                   
                        <Input value={this.state.filePath} label={ <Label size='medium' as='label' color='blue' htmlFor='img_input'> Photo de profil <Icon name='image' /></Label>} />
                        <Input id='img_input' style={{display :"none"}} type='file' onChange={(e)=> this.setState({filePath : e.target.value}) } />
                        
                    </Form.Field>
                    <Form.Field>
                        <label>Type de compte</label>
                       <Form.Select placeholder='Type de compte' options={options} />
                    </Form.Field>
                    <Button color='blue' onClick={this.handleSubmit.bind(this)} >Suivant <Icon name='arrow right'/> </Button>
                 </Form>
            </Modal.Content>
        </Modal>
        );
    }
}

