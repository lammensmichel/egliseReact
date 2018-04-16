
import React from 'react';
import Header from './route/header';
import Main from './route/main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    const style = {
      margin: '1em',
    };

    return <div><Header /><div style={style} className="container"><Main /></div></div>;
  }
}

export default App;
