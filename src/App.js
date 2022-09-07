import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import Footer from './Footer.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     showModal: false,
     selectedBeast: {}
    };
  }


  handleOnHide = () => {
    this.setState({
      showModal: false
    })
  }

  handleOnShowModal = (selectedBeast) => {
   console.log('selected Beast?', selectedBeast);
    this.setState({
      showModal: true,
      selectedBeast: selectedBeast
    });
  }

  render() {

    return (

      <>
        <Header />
        <Main
          data={data}
          handleOnShowModal={this.handleOnShowModal} />

        <Footer />

        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedBeast.title}</Modal.Title>
            
          </Modal.Header>
        </Modal>
      </>

    );
  }
}

export default App;