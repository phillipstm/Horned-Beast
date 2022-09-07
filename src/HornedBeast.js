import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
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
    console.log('Hello,knock if you can hear me');
    this.setState({
      likes: this.state.likes + 1,
    });
  }

  beastVotes = () => {
    this.setState({
      beastVote: true
    });
  }

  votesGot = () => {
    this.setState({
      beastVote: false
    });
  }

  helperFunctionH3Click = () => {
    this.props.handleOnShowModal(this.props.beastName)
  };


  render() {
    return (
      <>
        <Col className="mt-4">
          <Card className="h-100 p-3">
            <Card.Img
              src={this.props.image_url}
              alt={this.props.beastName}
              onClick={this.helperFunctionH3Click}
            />
            <Card.Body>
              <Card.Title>{this.props.beast.title}</Card.Title>
              <Card.Text>{this.props.beast.description}</Card.Text>
              <Card.Text>{this.state.likes} Like + ❤️‍🔥</Card.Text>
              <Card.Text onClick={this.handleLikes}> Click to Like your favorite Beast</Card.Text>
              {/* <div>{this.state.beastVote ? 'Vote for your favorite Horned Beast' : ''}</div>
              <Button onClick={this.beastVote}>Nice choice!</Button>
              <Button variant="success" onClick={this.votesGot}>Your vote was counted</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default HornedBeast;