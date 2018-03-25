import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Post from "../components/Post";
import Carousel from "../components/Carousel";
import { Flag } from "semantic-ui-react";
import Navbar from "../components/Navbar";

let data = [
  { src: "/img/a.jpg", titre: "Aziz" },
  { src: "/img/b.jpg", titre: "Bryson Tiller" },
  { src: "/img/c.png", titre: "DUT2" }
];

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

storiesOf("Posts", module)
  .add("default post (just text)", () => <Post />)
  .add("image post", () => <Post type="image" />)
  .add("video post", () => <Post type="video" />);
storiesOf("Semantic Ui React", module).add("Flag Senegal", () => (
  <Flag name="sn" />
));

storiesOf("Navbar", module).add("with some items", () => <Navbar />);
storiesOf("Navbar", module).add("connected user", () => (
  <Navbar connected={true} />
));

storiesOf("Carousel", module).add("carousel with 3 slides", () => (
  <Carousel data={data} />
));
