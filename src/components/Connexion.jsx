import React, { Component } from "react";

import { Form, Input, Button, Header, Message } from "semantic-ui-react";

import validate from "validate.js";

import _ from "lodash";

import constraint from "../Utils/ConnexionConstraint";

/**
 * Connexion component using semantic-ui for ReactJS
 * @author CheikhGwane
 * @since 20/03/2018
 *
 */

export default class ModalConnexion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: "",
      formError: false,
      isSubmit: false,
      errors: []
    };
  }

  handleLoginChange = e => {
    this.setState({ login: e.target.value });
  };

  handlePassWordChange = e => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isSubmit: true });
    const { login, password } = this.state;
    const isEmail = login.includes("@");
    const credentials = { mail: login, phone: login, password };

    let cons = _.omit(constraint, isEmail ? "phone" : "mail");
    const errors = validate(credentials, cons, { format: "flat" });
    console.log(errors);

    if (errors) {
      this.setState({ errors: errors });
      this.setState({ isSubmit: false });
    }

    // this.props.onLogin(_.omit(credentials, isEmail ? "phone" : "mail"));
  };

  render() {
    return (
      <Form
        error={this.state.errors.length > 0}
        style={{ width: "45%", left: "25%" }}
      >
        <Message
          error
          header="Une ou plusieurs erreurs se sont produites"
          list={this.state.errors}
        />
        <Form.Field>
          <label htmlFor="">E-mail/Téléphone</label>
          <Input
            type="mail"
            onChange={this.handleLoginChange.bind(this)}
            required
          />
        </Form.Field>

        <Form.Field>
          <label htmlFor="">Mot de passe</label>
          <Input
            placeholder="Mot de passe"
            type="password"
            onChange={this.handlePassWordChange.bind(this)}
            required
          />
        </Form.Field>
        <Button
          loading={this.state.isSubmit}
          fluid
          color="blue"
          onClick={this.handleSubmit.bind(this)}
        >
          Connection{" "}
        </Button>
        <Form.Field>
          <br />
          <a href={""}>Mot de passe oublier?</a>
        </Form.Field>
      </Form>
    );
  }
}
