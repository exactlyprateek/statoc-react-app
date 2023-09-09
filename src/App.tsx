import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './ui/MovieList/MovieList';

function App() {
  const [listOfMovies, setListOfMovies] = useState([]);
  async function fetchMovies() {
    try {
      const { data } = await axios.get(
        'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json'
      );
      console.log(data);
      setListOfMovies(data.entries);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMovies();

    return () => {
      setListOfMovies([]);
    };
  }, []);

  return (
    <Router>
      <header className={styles.Header}>
        <img src='tomatoesLogo.svg' alt='logo' className={styles.Logo} />
      </header>
      <div className={styles.Search}>
        <div className={styles.SearchIconWrapper}>
          <img src='search.svg' alt='search' className={styles.SearchIcon} />
        </div>

        <input className={styles.SearchInput} type='text' placeholder='Title' />
      </div>

      <div className={styles.Container}>
        <h2 className={styles.Title}>Popular Movies</h2>
        <MovieList listOfMovies={listOfMovies} />
      </div>
    </Router>
  );
}

export default App;
