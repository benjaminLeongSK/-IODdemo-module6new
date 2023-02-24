import React from 'react';
import Greetings from './Greetings';

class App extends React.Component {
  render() {
    const yourName = "JohnnySins";

    return <Greetings name={yourName}/>
  }
};

export default App