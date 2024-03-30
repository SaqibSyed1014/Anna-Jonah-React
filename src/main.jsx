import React from 'react'
import ReactDOM from 'react-dom'

import './styles/tailwind.css'
import './styles/main.css'

import App from './App'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

window.addEventListener('scroll', () => {
    AOS.refresh()
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
