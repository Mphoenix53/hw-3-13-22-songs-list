
import './App.css';
import Counterf from './functional/CounterF';
import Counterc from './class/CounterC';
import Listc from './class/List';
import Listf from './functional/List';

function App() {
  return (
    <div className="App">

      <div className="border">
        <h1>Functional</h1>
         <Counterf header='Functional'/>
         <Listf />
      </div>

      <div className="border">
        <h1>Class</h1>
         <Counterc header='Class 1'/>
         <Listc />
      </div>

    </div>
  );
}

export default App;
