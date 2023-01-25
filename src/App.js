import './App.css';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Search />
        <WeatherCard />
      </div>
    </div>
  );
}

export default App;
