import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Componets/NavBar';
import Movies from './Componets/Movies';
import Register from './Componets/Register';
import Login from './Componets/Login';
import Movieitem from './Componets/MovieItem';
import Favourite from './Componets/Favourite';
import React from 'react'
import { LanguageProvider } from "./Contesxt/LangContext";
import { useState } from "react";
import { useSelector } from "react-redux";



function App() {

  const [lang, setLang] = useState("en");

  return (
    <div
      dir={lang === "en" ? "ltr" : "rtl"}
      className={lang === "en" ? "text-left" : "text-right"}
    >      
    <Router>
      <LanguageProvider value={{lang,setLang}}>
        <Header />
        <div className='container py-5'>
            <Switch>
              <Route path='/' exact component={Movies} />
              <Route path='/Login' exact component={Login} />
              <Route path='/Register' exact component={Register} />
              <Route path='/Movieitem/:id' exact component={Movieitem} />
              <Route path='/Favourite' exact component={Favourite} />
            </Switch>
        </div>|
        </LanguageProvider>
      </Router>
    </div>
  );
}

export default App;
