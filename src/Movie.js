import React, {useState} from 'react';
import {useFetch} from "./useFetch";
import Cards from './Cards';
import Forma from './Forma';
import './App.css';
import './loading.css';
import {Row} from 'react-bootstrap';
function Movie() {
   const [title,setTitle]=useState("");
   const {movie,isLoading}=useFetch(`https://www.omdbapi.com/?apikey=e4db3ced&s=${title}`);
   const inputValue=(val)=>{
       setTitle(val);
   }
    return (       
        <div className="container text-center my-5">
            <Forma inputValue={inputValue} />
            {movie.Response==="True" && (isLoading?<div className="loader">Loading ...</div>:<Row className="justify-content-center card-list">{ movie.Search.map((e)=><Cards key={e.imdbID} {...e}/>)} </Row>)}
        </div>
    )
}

export default Movie
