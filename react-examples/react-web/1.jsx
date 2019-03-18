import React from 'react';
import ReactDom from 'react-dom';

const names = [
    'John Doe',
    'Jack Doedoe',
    'Lorem ipsum'
]

class HelloWorld extends React.Component {
    constructor() {
        super()

        this.state = { name: names[0] };
        this.changeName = this.changeName.bind(this);
    }
    changeName() {
        this.setState({ name: names[Math.floor(Math.random() * names.length)] })
    }
    render() {
        return (
            <React.Fragment>
                <p>Hello {this.state.name}</p>
                <button onClick={this.changeName}>Change name</button>
            </React.Fragment>
        )
    }
}

ReactDom.render(<HelloWorld />, document.getElementById('app'))