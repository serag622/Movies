import { useEffect, useState } from "react"
import axiosIstance from "./Config/Config"
import {Row , Col , Container,Card,Button} from 'react-bootstrap'
import Link from 'react-router-dom/Link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux"
import {Addtofavourties} from '../store/actions'
import {getMovies} from '../store/Action'

export default function Movies(){

    // const [movies,setmovies]=useState([])
    const [pagenumber,setpage]=useState(1)

    const movies= useSelector(state => state.Movies)
    // useEffect(()=>{
    //     axiosIstance.get('movie/popular',{
    //         params:{
    //             api_key :'fdc6e7010f3aabf52a4b413ecf1b13f4',
    //             page : pagenumber  
    //         }
    //     })
    //     .then((res)=>{
    //         console.log(res)
    //         setmovies(res.data.results)
    //     })
    //     .catch((error)=>{console.log(error)})          
    // },[pagenumber])
    
    const dispatch = useDispatch()

    useEffect(()=>{
            dispatch(getMovies(pagenumber))          
        },[pagenumber])


    const Prev=()=>{
        if(pagenumber>1){
       let i=pagenumber;
        i--;
        setpage(i)
        }      
    }

     const next=()=>{
       if(pagenumber <100){
       let i=pagenumber;
        i++;
        setpage(i)
       }     
    }
    

    const Addtofav=(m,e)=>{
      e.target.style.color='yellow'
      dispatch(Addtofavourties(m))
    }

    return(
        <>
        <h1 className='text-center'>Movies List</h1>
        <Container>
            <Row md={5} sm={3} className='g-4'>
                {movies?.map((m,index)=>{
                 return(
            <Col key={index} >
            <Card>
             <Card.Img variant="top"  src={'https://image.tmdb.org/t/p/w500/'+m.poster_path}/>
              <Card.Body>
                  <Link to={'/Movieitem/'+m.id}>
                 <Card.Title>{m.title}</Card.Title>
                 </Link>
                 <button className='btn' onClick={(e)=> Addtofav(m,e) } ><FontAwesomeIcon  icon={faStar}></FontAwesomeIcon> </button>
                 </Card.Body>
                </Card>
             </Col>
                 )
                 })}
            </Row>
            <button className='mx-5 btn btn-dark' onClick={()=> Prev()} >prev</button>
            <button className='mx-5 btn btn-dark' onClick={()=> next()}>next</button>
        </Container>
        

        </>
    )
}