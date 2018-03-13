import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import { Flag } from "semantic-ui-react";
import Navbar from "../components/Navbar";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("Semantic Ui React", module).add("Flag Senegal", () => (
  <Flag name="sn" />
));

storiesOf("Navbar", module).add("with some items", () => <Navbar />);
storiesOf("Navbar", module).add("connected user", () => (
  <Navbar connected={true} />
));
