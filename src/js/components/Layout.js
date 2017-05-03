import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  // "State" example
  constructor() {
    super();
    this.state = {name: "Israel"};
  }

  render() {
    // "State" example
    setTimeout(() => {
      this.setState({name: "David"});
    }, 1000);

    return (
      <div>
        {this.state.name}
        <Header  />
        <Footer />
      </div>
    );
  }
}
