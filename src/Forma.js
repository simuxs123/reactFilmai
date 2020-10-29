import React, {useState} from 'react';
import icon from './img/move.png';
function Forma({inputValue}) {
    const [movieTitle,setMovieTitle]= useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        inputValue(movieTitle);
        setMovieTitle("");
    }
    return (
    
        <section className="top">
            <h1 className="title"><span><img className="icon mr-3" src={icon} alt=''></img></span>Find your favorite movie</h1>
            <form className="my-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text"  
                        name="title" 
                        onChange={(e)=>setMovieTitle(e.target.value)} 
                        value={movieTitle} 
                        className="form-control" 
                        placeholder="Write movie title"/>
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </section>
        
    )
}

export default Forma
