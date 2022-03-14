import Navbar from 'react-bootstrap/Navbar'
import {Button, Container  , Nav } from 'react-bootstrap'
import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import LanguageContext from '../Contesxt/LangContext' 

export default function Header(){

    const fav = useSelector(state => state.Favourite.Fav)
    const {lang,setLang} = useContext(LanguageContext)

    const changelang=()=>{
        if(lang=='en'){
            setLang('ar')
        }
        else{
            setLang('en')
        }
    }

    return(
        <>
    <Navbar bg="dark" variant="dark" className='py-3'>
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/" className='mx-3 text-light text-decoration-none'> Home</Link>
      <Link to="/Login" className='mx-3 text-light text-decoration-none' >Login</Link>
      <Link to="/Register" className='mx-3 text-light text-decoration-none'>Register</Link>
      <Link to="/Favourite" className='mx-3 text-light text-decoration-none'>Favourite {fav.length > 0? fav.length : ''}</Link>
      <Button onClick={()=> changelang()}>Language {lang}</Button>
    </Nav>
    </Container>
   </Navbar>

        </>
    )

}