import React from 'react';
import { Card, Button, Col } from 'react-bootstrap'


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
            <Card.Title onClick={this.helperFunctionH3Click} >{this.props.beastName}</Card.Title>
            <Card.Img 
            src={this.props.image_url}
             alt={this.props.title}
             onClick={this.props.addBeast}
              />
            <p>{this.props.description}</p>
            <p>{this.state.likes} Like</p>
            <p>onClick={this.handleLikes} Click to Like your favorite Beast</p>
            <div>{this.state.beastVote ? 'Vote for your favorite Horned Beast' : ''}</div>
            <Button onClick={this.beastVote}>Nice choice!</Button>
            <Button variant="success" onClick={this.votesGot}>Your vote was counted</Button>
          </Card>
        </Col>
      </>
    );
  }
}

export default HornedBeast;