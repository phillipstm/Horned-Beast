import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import { Container, Row, Col } from 'react-bootstrap';

//debugger

class Main extends React.Component {
  render() {
    console.log('flippingBeast', this.props.handleOnShowModal)
    let beasts = this.props.data.map((newBeast, index) => {

      return (
        <HornedBeast
          beast={newBeast}
          key={index}
        // SelectBeast={this.props.SelectBeast}
        // handleOnShowModal={this.props.handleOnShowModal}
        />
      );
    });

    return (

      <Container>
        <Row lg={4} md={3} sm={2} xs={1}>
          {beasts}
        </Row>
      </Container>
    );
  }
}


export default Main;
