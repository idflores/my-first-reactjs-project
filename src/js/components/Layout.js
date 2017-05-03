import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    // {title} is the same as {title: title}
    // {title} may be used thanks to ES6 and Babel
    this.setState({title});
  }

  render() {
    // *extremely* important .bind(this) is used.
    // statement will perform state change on Layout component
    // _not_ the injected Header component
     return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)}  title={this.state.title} />
        <Footer />
      </div>
    );
  };
}
