import React from 'react'
import { Route, Routes } from 'react-router'
import { Files } from './pages/Files'
const App = () => {
  return <Routes>
  <Route path="/" element={ <Files /> } />
</Routes>
}

export default App
