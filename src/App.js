import React from 'react';
import Calculator from './Calculator';
import Emoji from './Emoji';
import Greetings from './Greetings';

class App extends React.Component {
  render() {
    return (
      <>
        <Greetings />
        <Emoji />
      </>
    )
  }
};

export default App;