
import './App.css';
import Adderess from './Components/Adderess';
import Info from './Components/Info';
import ListOfCins from './Components/ListOfCoins';
import Navbar from './Components/Navbar';
import Data from './Components/Data.jsx';
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Adderess/>
        <Data/>
          <Info/>
      <ListOfCins/>
    </div>
  );
}

export default App;
