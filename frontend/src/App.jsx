import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { FileList } from './pages/FilesList';
import { FileDetail } from './pages/FileDetail';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FileList />} />
      <Route path="/file" element={<FileDetail />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
