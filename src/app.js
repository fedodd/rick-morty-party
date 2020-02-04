
import React from "react";
import { hot } from 'react-hot-loader/root';
import Form from "./components/form/form";
import Results from "./components/results/results";
import Party from "./components/party/party";


class App extends React.Component {

  render() {
    const { name } = this.props;
    return (
      <div>
        <Form />
        <Results />
        <Party />
      </div>);
  }
}

export default hot(App);
