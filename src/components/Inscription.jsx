import React, { Component } from "react";

import constraint from "../Utils/ConnexionConstraint";

import validate from "validate.js";

import _ from "lodash";

import {
  Form,
  Input,
  Button,
  Header,
  Message,
  Segment,
  TransitionablePortal
} from "semantic-ui-react";

/**
 * Inscription component using semantic-ui-react
 * @author CheikhGwane
 * @since 20/03/2018
 *
 */

export default class Inscription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      isSubmit: false,
      error: [],
      text: ["Envoyer", "E-mail/Téléphone"],
      open: false
    };
  }

  handleLoginChange = e => {
    this.setState({ login: e.target.value });
  };

  handleSubmit = e => {
    this.setState({ error: [] });
    console.log("called");
    e.preventDefault();
    this.setState({ isSubmit: true });
    const { login } = this.state;
    console.log(login);
    const isEmail = login.includes("@");
    const credentials = { mail: login, phone: login };

    let cons = _.omit(constraint, isEmail ? "phone" : "mail", "password");
    const errors = validate(credentials, cons, { format: "flat" });

    console.log(errors);

    if (errors) {
      this.setState({ error: errors });
      this.setState({ isSubmit: false });
      return errors;
    }

    this.setState({ isSubmit: false });
    this.setState({ open: true });
    //this.props.Subscription function
  };

  Close = () => this.setState({ open: false });
  render() {
    /*  const { open } = this.state; */
    return (
      <div>
        <Form
          error={this.state.error.length > 0}
          style={{ width: "45%", left: "25%" }}
        >
          <Message
            error
            header="Une ou plusieurs erreurs se sont produites"
            list={this.state.error}
          />
          <Form.Field>
            <label htmlFor=""> {this.state.text[1]} </label>
            <Input
              type="mail"
              onChange={this.handleLoginChange.bind(this)}
              required
            />
          </Form.Field>
          <Button
            loading={this.state.isSubmit}
            onClick={this.handleSubmit.bind(this)}
            fluid
            color="blue"
          >
            {this.state.text[0]}
          </Button>
        </Form>
        <TransitionablePortal
          trigger={<Button primary content="Bonjour" />}
          open={this.state.open}
          onClose={this.Close.bind(this)}
        >
          <Segment
            style={{ left: "40%", position: "fixed", top: "50%", zIndex: 1000 }}
          >
            <Header>Demande reçu</Header>
            <p>Un code de vérification vous à été envoyer.</p>
            <p>
              Verifier si vous l'avez bien reçu, dans le cas contraire
              réessayer!
            </p>
          </Segment>
        </TransitionablePortal>
      </div>
    );
  }
}
