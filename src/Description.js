import React from 'react'
import {useFetch} from "./useFetch"
import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Description(props) {
    const id=props.match.params.id;
    const {movie,isLoading}=useFetch(`https://www.omdbapi.com/?apikey=e4db3ced&i=${id}`);
    return (
        <div className="container">
            {isLoading?<div className="loader">Loading ...</div>:
            <Row className="justify-content-center">
                <Col className='mt-4'md={9}>
                    <h3>{movie.Title}</h3>
                    <Row className='mb-3'>
                        <Col md={6}>
                        <img className="foto" src={movie.Poster} alt=''/>
                        </Col>
                        <Col md={6}>
                        <h5>Metai</h5>
                        <p>{movie.Year}</p>
                        <h5>Reitingas</h5>
                        <p>{movie.imdbRating}</p>
                        <h5>Aprasymas</h5>
                        <p>{movie.Plot}</p>
                        </Col>
                    </Row>
                     <Link className='link' to="/">Go back</Link>
                </Col>
            </Row>                 }
            
        </div>
    )
}

export default Description
