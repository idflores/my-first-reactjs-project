import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>It works!</h1>
        <h2>It works woot!</h2>
        <h3>Yay! Yay!</h3>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
