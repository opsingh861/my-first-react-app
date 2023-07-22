import './App.css';
<<<<<<< HEAD
import ClassComponents from './pages/ClassComponents';
import FunctionalComponents from './pages/FunctionalComponents';
import { Routes, Route } from 'react-router-dom';
=======
import ClassComponents from './components/ClassComponents';
import FunctionalComponents from './components/FunctionalComponents';
>>>>>>> 3060ac61b05e1e300cca0f44128846b196b85075
import { useState } from 'react';
const surname = "Dhanraj"
function App() {
  const [name, setName] = useState("Aditya")

  return (
<<<<<<< HEAD
    <Routes>
      <Route path='/' element={<ClassComponents />} />
      <Route path='/functional-component' element={<FunctionalComponents name={name} surname={surname} setName={setName} />} />
    </Routes>
=======
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponents />
      <br />
      <h1>Functional Components</h1>
      <FunctionalComponents name={name} surname={surname} setName={setName} />
    </div>
>>>>>>> 3060ac61b05e1e300cca0f44128846b196b85075
  )
}

export default App;
