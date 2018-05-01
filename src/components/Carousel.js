import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import PropTypes from "prop-types";

export default class Caroussel extends Component {
  render() {
    const { data } = this.props;

    return (
      <Carousel>
        {data.map((Obj, index) => (
          <Carousel.Item key={index}>
            <img as="link" src={Obj.src} width={900} height={500} />
            <Carousel.Caption>
              <h3> {Obj.titre}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

Carousel.propTypes = {
  data: PropTypes.array
};
