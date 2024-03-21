import {useState,useEffect} from 'react';
import React from 'react';

import './App.css';
import Searchicon from'./search.svg';
import Moviecard from'./Moviecard';

// 4df3993d


const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=4df3993d';

const movie1 = 
    {
        "Title": "The Lego Batman Movie",
        "Year": "2017",
        "imdbID": "tt4116284",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    }


const App = () =>{

const [movies, setMovies] = useState([]);

const [searchTerm, setsearchTerm] = useState('');

const searchMovies = async (title) =>{
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();

setMovies(data.Search);
}

useEffect(()=>{
  searchMovies();
},[]);


    return(
      <div className = "app">
        <h1>MovieVerse</h1>

        <div className='search'>
            <input placeholder='Search for Movies' value= {searchTerm}
            onChange = {(e) => setsearchTerm(e.target.value)}/>
            <img 
              src={Searchicon}
              alt='search'
              onClick={()=> searchMovies(searchTerm)}/>
        </div>


        {
           movies?.length > 1 ? (
            <div className='container'>
            {movies.map((movie) => (
                 <Moviecard movie = {movie}/> 
            ))}
        </div>
           ) :
           (
            <div className='empty'>
                <h2>
                    NO Movies Found
                </h2>
            </div>
           )
        }
       
       
       
      </div>
    );
}

export default App;
