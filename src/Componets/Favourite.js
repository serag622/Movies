import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Row , Col , Container,Card,Button} from 'react-bootstrap'
import Link from 'react-router-dom/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Deletefavourite } from '../store/actions';

function Favourite() {
    const fav = useSelector(state => state.Favourite.Fav)


    const dispatch = useDispatch()
    const DeleteFavourite =(m)=>{
        console.log(m);
        let index = fav.findIndex((mov)=> mov.id === m.id)
        fav.splice(index,1)
        dispatch(Deletefavourite(fav))
    }

    return (
        <div>
            <h1 className='text-center'>Favourite Movies</h1>
            <Container>
            <Row md={5} sm={3} className='g-4'>
                {fav?.map((m,index)=>{
                 return(
            <Col key={index} >
            <Card>
             <Card.Img variant="top"  src={'https://image.tmdb.org/t/p/w500/'+m.poster_path}/>
              <Card.Body>
                  <Link to={'/Movieitem/'+m.id}>
                 <Card.Title>{m.title}</Card.Title>
                 </Link>
                 <button  className='btn' onClick={()=> DeleteFavourite(m)}  ><FontAwesomeIcon  icon={faTrashAlt}></FontAwesomeIcon> </button>
                 </Card.Body>
                </Card>
             </Col>
                 )
                 })}
            </Row>
        </Container>
        </div>
    );
}

export default Favourite;