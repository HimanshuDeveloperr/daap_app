
import './App.css';
import Info from './Components/Info';
import ListOfCins from './Components/ListOfCoins';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

          <Info/>
      <ListOfCins/>
    </div>
  );
}

export default App;
