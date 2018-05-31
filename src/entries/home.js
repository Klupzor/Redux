import React from 'react'
import {render} from 'react-dom'
import data from '../api.json'
import Home from '../pages/containers/home';
import { createStore } from 'redux';

// redux ...................................................
const initialState = {
    data: {
        ...data
    }
}

const store = createStore(
    (state)=> state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState())

// redux .............................................................

const homeContainer = document.getElementById('home-container')
// ReactDOM.render(que voy a renderizar, donde lo hare)
// const ms = <h1>hola mundo!!</h1>
render(<Home data= {data}/>, homeContainer)
