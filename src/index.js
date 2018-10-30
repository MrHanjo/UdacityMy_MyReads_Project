import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'  	//I should see that this was imported into the JSON file.
													//this is all on Module 5, Lesson 5.3
import App from './App'
import './index.css'

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,  //"[this BrowserRouter listens for changes in the URL and alerts the other components of these changes.]"
    document.getElementById('root')
)