//ORIGINAL CODE FOR APPjs - 25/11/2021 
import logo from './Grid_Scout_Logo.png.png';
import './App.css';
import ResultsFetchAPI from './components/ResultsFetchAPI';
import ConfigFetchAPI from './components/ConfigFetchAPI';
import Form from './components/Form';

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
         <p>
           <Form />
         </p>
     </div>
   );
 }

export default App;