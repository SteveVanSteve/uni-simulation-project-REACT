import logo from './Grid_Scout_Logo.png.png';
import './App.css';
import ResultsFetchAPI from './components/ResultsFetchAPI';
import ConfigFetchAPI from './components/ConfigFetchAPI';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Grid-Scout!
        </p>
        </header>
        <p>
          <ResultsFetchAPI />
        </p>
          <ConfigFetchAPI />
    </div>
  );
}

export default App;

