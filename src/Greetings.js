import React from 'react';

class Greetings extends React.Component {
    render() {
        return <h2>Hello, {this.props.name}</h2>;
    }
}

export default Greetings;