import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPokemons(data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <div className='pad'>
        <h2>LIST OF POKEMON NAMES:</h2>
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

