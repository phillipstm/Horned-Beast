import React from 'react';
import HornedBeast from './HornedBeast.js';
import './Main.css';
import {Container, Row} from 'react-bootstrap';

class Main extends React.Component {
  render() {


    let beasts = this.props.data.map((newHornedBeast,index) => {

      return <Beast
      beastName={newHornedBeast.name}
      key={index}
      image_url={newHornedBeast.imageURL}
      addBeast={this.props.addHornedBeast}
      handleOnShowModal={this.props.handleOnShowModal}
      />
      
    });
    return (
      <main>
        <HornedBeast title="UniWhal" image_url="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" description="A unicorn and a narwhal nuzzling thier horns" />
        <HornedBeast title="Rhino Family" image_url= "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" description="Parent rhino with two babies"/>
        <HornedBeast title="Unicorn Head" image_url="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" description= "Someone wearing a very silly unicorn head mask"/>







      </main>
    )
  }
}

export default Main;