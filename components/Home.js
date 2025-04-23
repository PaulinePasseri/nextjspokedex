import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react'
import Pokemon from './Pokemon';

function Home() {
  const [pokemonList, setPokemonList] = useState([])
  const [nextPokemon, setNextPokemon] = useState(false)
  const [id, setId] = useState(1)
  
  const getPokemons = async () => {
    const pokemonsData = [...pokemonList]
    for (let pokemonId = id; pokemonId < id + 15; pokemonId++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      pokemonsData.push(data)
    }
    setPokemonList(pokemonsData)
    setId(id + 15)
  }

  useEffect(() => {
    getPokemons()
  }, [nextPokemon])
  
  const pokemons = pokemonList.map((data, index) => {
    return <Pokemon key={index} name={data.name} type={data.types[0].type.name} image={data.sprites.front_default} id={index}/> 
  })

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Pokedex</h1>
      <div className={styles.pokemonContainer}>
        {pokemons}
      </div>
      <button className={styles.next} onClick={() => setNextPokemon(!nextPokemon)}>Next</button>
    </div>
  );
}

export default Home;
