import React from 'react'
import {render} from 'react-dom'
import data from '../api.json'
import Home from '../pages/containers/home';


const homeContainer = document.getElementById('home-container')
// ReactDOM.render(que voy a renderizar, donde lo hare)
// const ms = <h1>hola mundo!!</h1>
render(<Home data= {data}/>, homeContainer)
