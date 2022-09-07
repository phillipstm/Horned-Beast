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
      selectBeast: null
    };
  }


  handleOnHide = () => {
    this.setState({
      showModal: false
    })
  }

  handleOnShowModal = (name) => {
    this.setState({
      showModal: true,
      selectBeast: name
    })
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
            <Modal.Title>{this.state.selectBeast}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>

    );
  }
}

export default App;