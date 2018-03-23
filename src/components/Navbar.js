import React, { Component } from "react";
import { Button, Dropdown, Menu, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  state = { activeItem: "Home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu borderless={true} stackable size="small">
        <Menu.Menu position="left">
          <Menu.Item
            name="logo"
            active={activeItem === "logo"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Accueil
        </Menu.Item>
        <Menu.Item
          name="news"
          active={activeItem === "news"}
          onClick={this.handleItemClick}
        >
          Actualités
        </Menu.Item>
        <Dropdown item text="Synapse">
          <Dropdown.Menu>
            <Dropdown.Item>Président</Dropdown.Item>
            <Dropdown.Item>Commission Pédagogique</Dropdown.Item>
            <Dropdown.Item>Commission Sociale</Dropdown.Item>
            <Dropdown.Item>Commission Relations extérieures</Dropdown.Item>
            <Dropdown.Item>Commission Organisation</Dropdown.Item>
            <Dropdown.Item>Commission Culturelle et Sportive</Dropdown.Item>
            <Dropdown.Item>Commission Relations extérieures</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name="forum"
          active={activeItem === "forum"}
          onClick={this.handleItemClick}
        >
          Forum
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            {this.props.connected ? (
              <Dropdown
                button
                className="icon"
                floating
                labeled
                icon="user circle"
                text="Mice Bishop"
              >
                <Dropdown.Menu>
                  <Dropdown.Item>Profil</Dropdown.Item>
                  <Dropdown.Item>Se Déconnecter</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Button primary>Connexion</Button>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

Navbar.defaultProps = {
  connected: false
};

Navbar.propTypes = {
  connected: PropTypes.bool.isRequired
};
