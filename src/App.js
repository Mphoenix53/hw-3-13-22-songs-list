
import './App.css';
import Counterf from './functional/CounterF';
import Counterc from './class/CounterC';

function App() {
  return (
    <div className="App">

      <div className="border">
        <h1>Functional</h1>
         <Counterf header='Functional'/>
      </div>

      <div className="border">
        <h1>Class</h1>
         <Counterc />
      </div>

    </div>
  );
}

export default App;
