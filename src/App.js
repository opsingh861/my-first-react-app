import './App.css';
import ClassComponents from './components/ClassComponents';
import FunctionalComponents from './components/FunctionalComponents';

function App() {
  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponents />
      <br />
      <h1>Functional Components</h1>
      <FunctionalComponents />
    </div>
  );
}

export default App;
