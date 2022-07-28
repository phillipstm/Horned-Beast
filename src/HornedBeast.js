import React from 'react';
import { Card, Button, Col} from 'react-bootstrap'


class HornedBeast extends React.Component {
  render() {
    
    console.log('This props', this.props)
    return (
      <div>
       <h2>{this.props.title}</h2> 
       <img src={this.props.image_url} alt={this.props.title}/>
       <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;