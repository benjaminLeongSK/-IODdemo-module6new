import React from 'react';
import Calculator from './Calculator';
import Clock from './Clock';
import Emoji from './Emoji';
import Greetings from './Greetings';

class App extends React.Component {
  render() {
    return (
      <>
        <Greetings />
        <Emoji />
        <Calculator />
        <Clock />
      </>
    )
  }
};

export default App;