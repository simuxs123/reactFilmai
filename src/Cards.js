import React from 'react';
import PropTypes from 'prop-types';
import {Card,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Cards({Title, Poster,imdbID}) {
    return (
        <div className="text-left cards">            
                <Col md={4} className="mb-5" >                
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Poster} />
                        <Card.Body>
                            <Card.Title>{Title}</Card.Title>
                            <Link to={`/${imdbID}`}>Show More</Link>
                        </Card.Body>
                    </Card>
                </Col>               
        </div>
        
    )
}
Cards.propTypes={
    Poster:PropTypes.string.isRequired,
    Title:PropTypes.string.isRequired,
    imdbID:PropTypes.string.isRequired
}
Cards.defaultProps={
    Poster:"https://image.shutterstock.com/z/stock-vector-prohibition-no-photo-sign-vector-illustration-449151856.jpg",
    Title:"Not Find",
    imdbID:"tt1201607"
}
export default Cards

