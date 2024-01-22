import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        console.log(response.data);
        setPokemons(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App"> 
      <h2>LIST OF POKEMON NAMES:</h2>   
      <div className='pad'>        
        <ol>
          {pokemons.map((pokemon, index) => (
            <li key={index} className='list'>{pokemon.name}.</li>  
          ))}
        </ol>
      </div>   
    </div>
  );
}

export default App;
