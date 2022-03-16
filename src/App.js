
import './App.css';
import Counterf from './functional/CounterF';
import Counterc from './class/CounterC';

function App() {
  return (
    <div className="App, border">

      <div className="border">
        <h1>Functional</h1>
         <Counterf />
      </div>

      <div className="border">
        <h1>Class</h1>
         <Counterc />
      </div>

    </div>
  );
}

export default App;
