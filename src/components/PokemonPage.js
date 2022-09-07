import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
const [ pokemon, setPokemon ] = useState([]);
const [ searchValue, setSearchValue ] = useState("")

const handleSearch = (event) => {
  setSearchValue(event.target.value)
}

useEffect(() => {
  fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(data => setPokemon(data))
}, [])

const filteredPokemon = pokemon.filter((char) => {
      return char.name.includes(searchValue.toLowerCase())
    })


    const updatePokemon = (newPokemon) => {
      setPokemon([...pokemon, newPokemon])
    }



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm updatePokemon={updatePokemon}/>
      <br />
      <Search searchValue={searchValue} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
