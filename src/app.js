
import React from "react";
import { hot } from 'react-hot-loader/root';
import Form from "./components/form/form";
import Example from "./components/example";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (<div>
      <Form />
      {/* <Example /> */}
      </div>);
  }
}

export default hot(App);
