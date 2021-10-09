import './Movies.css';
import { movies } from '../data/movies';
import Banner from './movieBanner';

const App = () => {
    return (
        <div className="container">
            {movies.map(movie => (
                <Banner />
            ))}
        </div>
    )
}

export default App;