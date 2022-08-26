import React from 'react';


class Header extends React.Component {
  render() {
    console.log(this.props.beasts);

    return (

      <header>
        {/*add emoji*/}
        <h1>Horned Beast {this.props.beasts}</h1>
      </header>
    );
  }
}

export default Header;
