
import './App.css';
import Adderess from './Components/Adderess';
import Info from './Components/Info';
import ListOfCins from './Components/ListOfCoins';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Adderess/>
          <Info/>
      <ListOfCins/>
    </div>
  );
}

export default App;
