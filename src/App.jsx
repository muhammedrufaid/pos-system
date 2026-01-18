// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Auth, Home, Menu, Orders } from './pages'
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
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<div> not found</div>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
