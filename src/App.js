import './App.css';
import Search from './Components/Search';
import WeatherCard from './Components/WeatherCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <WeatherCard />
      </header>
    </div>
  );
}

export default App;
