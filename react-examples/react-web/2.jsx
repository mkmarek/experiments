import React from 'react';
import ReactDom from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux'

const names = [
    'John Doe',
    'Jack Doedoe',
    'Lorem ipsum'
]

const reducer = (state = { name: names[0] }, action) => {
    switch (action.type) {
        case 'CHANGE_NAME': return { ...state, name: names[Math.floor(Math.random() * names.length)] };
    }

    return state;
}

const HelloWorld = ({ name, changeName }) =>
    <React.Fragment>
        <p>Hello {name}</p>
        <button onClick={changeName}>Change name</button>
    </React.Fragment>

const mapStateToProps = (state) => ({
    name: state.name
})

const mapDispatchToProps = (dispatch) => ({
    changeName: () => dispatch({ type: 'CHANGE_NAME' })
})

const ConnectedHelloWorld = connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloWorld);

ReactDom.render(
    <Provider store={createStore(reducer)}>
        <ConnectedHelloWorld />
    </Provider>, document.getElementById('app'))