import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import { Container, Row, Form } from 'react-bootstrap';




class Main extends React.Component {



  render() {
    console.log('proof of life',this.props.data);

    let beasts = this.props.data.map((newBeast, index) => {
      return (
        <HornedBeast
          beast={newBeast}
          key={index}
          handleOnShowModal={this.props.handleOnShowModal}
        />
      );
    });










    return (
      <>
        <main>
          <Form>
            <Form.Label>How Many Horns Do You Like?</Form.Label>
            <Form.Group>
              <Form.Select name="selected" onChange={this.props.handleSelect}>
                <option value="33">All Beasts!</option>
                <option value="1">1 Horn</option>
                <option value="2">2 Horns!</option>
                <option value="3">3 Horns!</option>
                <option value="100">100 That's Way Too Many!</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </main>

        <Container>
          <Row lg={4} md={3} sm={2} xs={1}>
            {beasts}
          </Row>
        </Container>
      </>
    );
  }
}


export default Main;
