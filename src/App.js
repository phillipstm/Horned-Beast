import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      beast: '',
      showModal: false,
      selectBeast: ''
    };
  }

  addBeast = () => {
    this.setState({
      beast: this.state.beast + '<3'
    });
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
      <Header beasts={this.state.beast} /><Main
        addBeast={this.state.addBeast}
        data={data}
        handleOnShowModal={this.handleOnShowModal} />

      <footer>Which is your favorite?</footer>
  
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