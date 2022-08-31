import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import { Container, Row, Col } from 'react-bootstrap';

//debugger

class Main extends React.Component {
  render() {
    console.log('function passsed as prop', this.props.handleOnShowModal);

    let beasts = this.props.data;

    return (
      <Container>
        <Row lg={4} md={3} sm={2} xs={1}>

          {beasts.map((newBeast, index) => (
            <Col>
              <HornedBeast
                beastName={newBeast.name}
                key={index}
                image_URL={newBeast.imageURL}
                addBeast={this.props.addBeast}
                handleOnShowModal={this.props.handleOnShowModal}
              />
            </Col>
          ))};
        </Row>
      </Container>
    );
  }
}

//     const beastImages = this.props.imageUrls;

//     return (
//       <>
//         <h2>{this.props.message}</h2>

//         <Container>
//           <Row>
//             <Col>
//               <BeastImage image_url={beastImages[0].image_url} />
//             </Col>
//             <Col>
//               <BeastImage image_url={beastImages[1].image_url} />
//             </Col>
//             <Col>
//               <BeastImage image_url={beastImages[2].image_url} />
//             </Col>
//           </Row>
//           <Row>
//             <Col>
//               <BeastImage image_url={beastImages[3].image_url} />
//             </Col>
//             <Col>
//               <BeastImage image_url={beastImages[4].image_url} />
//             </Col>
//             <Col>
//               <BeastImage image_url={beastImages[5].image_url} />
//             </Col>
//           </Row>

//         </Container>
//       </div>
//     );
//   }
// }


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