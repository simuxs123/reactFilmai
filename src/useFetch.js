import {useState,useEffect} from 'react';

export const useFetch=(url)=>{
    const [isLoading,setIsLoading]=useState(true);
    const [movie, setMovie]=useState([]);
    const getMovies=async ()=>{
        const response=await fetch(url);
        const data= await response.json();
        setMovie(data);
        setIsLoading(false);
    }
    useEffect(() => {
        getMovies();
        setIsLoading(true);
    }, [url]);
    return {movie,isLoading};
}