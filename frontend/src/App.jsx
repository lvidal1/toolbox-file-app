import React from 'react'
import { Route, Routes } from 'react-router'
import { FileList } from './pages/FilesList'
import { FileDetail } from './pages/FileDetail'
const App = () => {
  return <Routes>
  <Route path="/" element={ <FileList /> } />
  <Route path="detail" element={ <FileDetail /> } />
</Routes>
}

export default App
