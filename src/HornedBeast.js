import React from 'react';
import { Card, Col } from 'react-bootstrap';
//import Emoji from 'a11y-react-emoji';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      beastVote: false
    };
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  }



  openModalHandler = () => {
    console.log('function that calls the func in app, from our image onClick');
    this.props.handleOnShowModal(this.props.beast);
  };


  render() {
    return (
      <>
        <Col className="mt-4">
          <Card className="h-100 p-3">
            <Card.Title onClick={this.handleLikes}>{this.props.beast.title}</Card.Title>
            <Card.Img
              src={this.props.beast.image_url}
              alt={this.props.beastName}
              onClick={this.openModalHandler}
            />
            <Card.Body>
              <Card.Text>{this.props.beast.description}</Card.Text>
              <Card.Text>{this.state.likes} Likes</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default HornedBeast;