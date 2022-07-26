import React from 'react';

class HornedBeast extends React.Component {
  render() {
    console.log('This props', this.props)
    return (
      <div>
       <p>{this.props.title}</p> 
      </div>
    );
  }
}

export default HornedBeast;