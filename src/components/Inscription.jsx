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
      text: ["Envoyer", "Valider", "E-mail/Téléphone", "Code de vérification"],
      open: false
    };
  }

  handleLoginChange = e => {
    this.setState({ login: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ error: [], isSubmit: true });
    const { login } = this.state;
    console.log(login);
    const isEmail = login.includes("@");
    const credentials = { mail: login, phone: login };

    let cons = _.omit(constraint, isEmail ? "phone" : "mail", "password");
    const errors = validate(credentials, cons, { format: "flat" });

    if (errors) {
      this.setState({ error: errors, isSubmit: false });
      return;
    }
    this.setState({ open: true });
    console.log(this.state);
  };

  Close = () => this.setState({ open: false });
  changelabel = elmnt => {
    if (this.state.isSubmit && this.state.error.length == 0) {
      return elmnt === "label" ? this.state.text[3] : this.state.text[1];
    }
    return elmnt == "label" ? this.state.text[2] : this.state.text[0];
  };

  render() {
    console.log("called");
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
            <label htmlFor="">{this.changelabel("label")}</label>
            <Input
              type="mail"
              onChange={this.handleLoginChange.bind(this)}
              required
            />
          </Form.Field>
          <Button onClick={this.handleSubmit.bind(this)} fluid color="blue">
            {this.changelabel("button")}
          </Button>
        </Form>
        <TransitionablePortal
          open={this.state.open}
          onClose={this.Close.bind(this)}
        >
          <Segment
            style={{ left: "40%", position: "fixed", top: "30%", zIndex: 1000 }}
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
