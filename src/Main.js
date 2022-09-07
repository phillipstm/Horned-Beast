import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import { Container, Row} from 'react-bootstrap';



class Main extends React.Component {
  render() {
    // console.log('proof of life',this.props.data);
    let beasts = this.props.data.map((newBeast, index) => {

      return (
        <HornedBeast
          beast={newBeast}
          key={index}
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
