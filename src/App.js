import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json'


class App extends React.Component {

constructor(props){
  super(props);
  this.state ={
    beast: '',
  };
}

addBeast = () => {
  this.setState({
    beast: this.state.beast + '<3'
  });
}

  render() {
    console.log('we got data?',data);
    return (
      <>
        <Header/>
        <Main
        addBeast={this.addBeast}
        data={data}
        />
        <Footer/>
      </>
    );
  }
}

export default App;