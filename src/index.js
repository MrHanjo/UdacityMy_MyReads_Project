import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'  //I should see that the dom was imported in the Json file
//this is all on Module 5, Lesson 5.3
import App from './App'
import './index.css'

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,  //this brower router listens for changes in the url and alerts the other components of these changes
    document.getElementById('root')
)