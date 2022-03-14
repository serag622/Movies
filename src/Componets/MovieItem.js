import axios from "axios"
import { useEffect, useState } from "react"
import axiosIstance from "./Config/Config"
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import Link from 'react-router-dom/Link'
import { useParams } from "react-router"
import React from 'react'


export default function Movieitem() {

    const [movie, setmovie] = useState({})
    const params = useParams()
    console.log(params.id)

    useEffect(() => {
        axiosIstance.get(`movie/${params.id}?`,{
            params:{
                api_key :'fdc6e7010f3aabf52a4b413ecf1b13f4'  
            }
        })
            .then((res) => {
                console.log(res)
                setmovie(res.data)
            })
            .catch((error) => { console.log(error) })

    }, [])

    return (
        <>
            <h1 className='text-center'>{movie.title}</h1>
            <Container className='py-5'>
                <Card className='text-center border-0'>
                    <Card.Img variant="top" className='mx-auto' style={{width:500,height:600}} src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.overview}
                        </Card.Text>
                        <Link to='/' variant="primary">Go Back</Link>
                    </Card.Body>
                </Card>
            </Container>

        </>
    )
}