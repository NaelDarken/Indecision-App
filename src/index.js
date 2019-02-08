
// Import React with React-DOM
import React from 'react'
import ReactDOM from 'react-dom'

// Application DOM
const wrapper = document.querySelector('#app')

// Global App Component
import App from './components/App'

// Import CSS Files
import 'normalize.css'
import './sass/main.sass'

// Render Application
ReactDOM.render(<App />, wrapper)
