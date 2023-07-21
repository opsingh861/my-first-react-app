import './App.css';
import ClassComponents from './pages/ClassComponents';
import FunctionalComponents from './pages/FunctionalComponents';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
const surname = "Dhanraj"
function App() {
  const [name, setName] = useState("Aditya")

  return (
    <Routes>
      <Route path='/' element={<ClassComponents />} />
      <Route path='/functional-component' element={<FunctionalComponents name={name} surname={surname} setName={setName} />} />
    </Routes>
  )
}

export default App;
