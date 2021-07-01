import logo from './logo.svg';
import './App.css';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
        <h1>Redux Movies</h1>
        <div className="container">
          <MovieDetails/>
          <MoviesList/>
        </div>
    </div>
  );
}

export default App;
