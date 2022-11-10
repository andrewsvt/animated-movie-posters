declare module "framer-motion" {
    export * from "framer-motion/types/three-entry"
}

export interface IMovieTypes {
    adult: false;
    backdrop_path: string;
    genre_ids: [number];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;
}