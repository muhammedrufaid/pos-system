import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Auth, Home, Orders } from './pages'
import Headers from './components/shared/Headers'
import Tables from './pages/Tables'

function App() {

  return (
    <>
      <Router>
        <Headers/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
