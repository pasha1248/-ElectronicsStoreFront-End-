/** @format */

import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import UserStore from './STORE/UserStore'
import DeviceStore from './STORE/DeviceStore'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const Context = createContext(null)

root.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        user: new UserStore(),
        device: new DeviceStore(),
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
)
