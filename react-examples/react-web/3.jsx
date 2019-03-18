import React from 'react';
import ReactDom from 'react-dom';
import firebase from 'firebase';

const names = [
    'John Doe',
    'Jack Doedoe',
    'Lorem ipsum'
]

class HelloWorld extends React.Component {
    constructor() {
        super()

        this.state = { names: [] };
        this.addName = this.addName.bind(this);
    }
    addName() {
        firebase.firestore()
            .collection('names')
            .add({ name: names[Math.floor(Math.random() * names.length)] });
    }
    componentDidMount() {
        this.unsubscribe = firebase.firestore()
            .collection('names')
            .onSnapshot((querySnapshot) => {
                const names = [];
                querySnapshot.forEach((userDoc) => {
                    const data = userDoc.data();
                    names.push(data.name);
                });
                this.setState({ names });
            });
    }
    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    render() {
        return (
            <React.Fragment>
                <p>Hello</p>
                {this.state.names.map((name, i) => <p key={i}>{name}</p>)}
                <button onClick={this.addName}>Add name</button>
            </React.Fragment>
        )
    }
}

var config = {
    apiKey: "AIzaSyAFmz_FfdgCO-zm9zKtVKldfGxGZ2c8SKA",
    authDomain: "fir-1bc82.firebaseapp.com",
    databaseURL: "https://fir-1bc82.firebaseio.com",
    projectId: "fir-1bc82",
    storageBucket: "",
    messagingSenderId: "362838546053"
};
firebase.initializeApp(config);

ReactDom.render(<HelloWorld />, document.getElementById('app'))