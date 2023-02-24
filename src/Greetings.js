import React from 'react';

class Greetings extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "Johnny Sins" };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        return this.setState({name: "Elon Musk"})
    }

    render() {
        return (
        <div>
            <h2>Hello, { this.state.name }</h2>
            <button onClick={this.handleChange}>Click to change Name</button>
        </div> 
        )
    }
}

export default Greetings;