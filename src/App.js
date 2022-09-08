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
      selectedBeast: {},
      sortedData: data
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
      selectedBeast: selectedBeast,
    });
  }


  handleSelect = (event) => {
    let selected = parseInt(event.target.value);
    if (selected === 1){
      let newData = this.state.sortedData.filter((number) => number.horns === 1);
      this.setState({ sortedData: newData});
    }else if (selected === 2) {
      let newData = this.state.sortedData.filter((number) => number.horns === 2);
      this.setState({ sortedData: newData });
    }else if (selected === 3){
      let newData = this.state.sortedData.filter((number) => number.horns === 3);
      this.setState({ sortedData: newData});
    }else if (selected === 100){ 
      let newData = this.state.sortedData.filter((number) => number.horns === 100);
      this.setState({ sortedData: newData });
    }else {
      this.setState({ sortedData: data});
    }
  };

  render() {

    return (

      <>
        <Header />
        <Main
          data={this.state.sortedData}
          handleOnShowModal={this.handleOnShowModal}
          handleSelect={this.handleSelect}
          />

        <Footer />

        <Modal show={this.state.showModal} onHide={this.handleOnHide} >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedBeast.title}</Modal.Title>
            <Modal.Body>
            <img src={this.state.selectedBeast.image_url}
              alt={this.state.selectedBeast.title} />
            <p>{this.state.selectedBeast.description}</p>
          
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </>

    );
  }
}

export default App;