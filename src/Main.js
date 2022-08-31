import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import { Container, Row, Col } from 'react-bootstrap';

//debugger

class Main extends React.Component {
  render() {

    let beasts = this.props.data;

    return (
      <Container>
        <Row lg={4} md={3} sm={2} xs={1}>

          {beasts.map((newBeast, i) => (
            <Col>
              <HornedBeast
                beast={newBeast.name}
                key={i}
                // image_url={newBeast.image_url}
                // addBeast={this.props.addBeast}
                handleOnShowModal={this.props.handleOnShowModal}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}



// class BeastImage extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       "status": "Liked"
//     }
//   }

//   handleClick = () => {
//     const newStatus = this.state.status === "Nope" ? "Liked" : "Nope";
//     this.setState({ status: newStatus });
//   }

//   render() {
//     return (
//       <div onClick={this.handleClick}>
//         <Image src={this.props.image_url} alt="a horned beast" round fluid />
//         <h3>{this.state.status}</h3>
//       </div>
//     );
//   }
// }


export default Main;