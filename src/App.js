import './App.css';
import ClassComponents from './components/ClassComponents';
import FunctionalComponents from './components/FunctionalComponents';
import { useState } from 'react';
const surname = "Dhanraj"
function App() {
  const [name, setName] = useState("Aditya")

  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponents />
      <br />
      <h1>Functional Components</h1>
      <FunctionalComponents name={name} surname={surname} setName={setName} />
    </div>
  )
}

export default App;
