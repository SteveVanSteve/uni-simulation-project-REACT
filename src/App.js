import logo from './Grid_Scout_Logo.png.png';
import './App.css';
import ResultsFetchAPI from './components/ResultsFetchAPI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Grid-Scout!
        </p>
        </header>
        <ResultsFetchAPI />
        <p>
          
        </p>
    </div>
  );
}

export default App;

