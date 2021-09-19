import React from 'react'
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './router'
import { NavBar } from './components/Navbars/NavBar'

function App() {
  const routers = useRoutes()

  return (
    <div className="App">
      {/* Функциональный компонент с счетчиком */}
      {/* <UseState /> */}
      {/* Классовый компонент с счетчиком */}
      {/* <ClassUseState /> */}
      {/* Posts example */}
      {/* <Posts /> */}

      <BrowserRouter>
        <NavBar />
        {routers}
      </BrowserRouter>
    </div>
  )
}

export default App
