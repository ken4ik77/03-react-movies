import css from './MovieGrid.module.css'
import type { Movie } from '../../types/movie'

interface MoviesGridProps {
    movies: Movie[];
    onSelect: (movie: Movie) => void;
}

const MovieGrid = ({ movies, onSelect }: MoviesGridProps) => {
    return (
        <ul className={css.grid}>
            {movies.map((movie: Movie) => (
                <li key={movie.id} onClick={() => onSelect(movie)}>
                    <div className={css.card}>
                        <img
                            className={css.image}
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                            loading="lazy"
                        />
                        <h2 className={css.title}>{movie.title}</h2>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default MovieGrid