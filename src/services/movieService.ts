import axios from "axios";
import type { Movie } from "../types/movie";

interface MovieApiResponse {
    results: Movie[],
    total_pages: number,
};

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const movieService = axios.create({
    baseURL: TMDB_API_BASE_URL,
    headers: {
        Authorization: `Bearer ${TMDB_API_TOKEN}`,
    },
});

export const fetchMovies = async (query: string): Promise<Movie[]> => {
    try {
        const response = await movieService.get<MovieApiResponse>('/search/movie', {
            params: {
                query,
            },
        });

        return response.data.results;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Failed to fetch movies:', error.message);
            throw new Error(`Failed to fetch movies: ${error.message}`);
        }
        console.error('An unexpected error occurred:', error);
        throw new Error('An unexpected error occurred. Please try again later.');
    }
};