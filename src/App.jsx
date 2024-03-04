import { React, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'



const App = () => {
  return (
    <main>
     <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      
    </Router>
    </main>
  );
}

export default App;
