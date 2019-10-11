import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';


import CharacterCard from './CharacterCard';

const Container = styled.div`
  width: 80vw;
  background: #232323;
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto 100px;
`;


function CardDeck() {
    const [character, setCharacter] = useState([]);
  
    useEffect (() => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
          console.log(response.data.results);
          setCharacter(response.data.results)
        })
        .catch(error => {
          console.log("The data was not returned. Sad.", error);
        });
    }, []);
  
    return (
      <Container>
          {character.map((character) => {
            return (
              <CharacterCard
                key={character.index}
                name={character.name}
                birth_year={character.birth_year}
                gender={character.gender}
                eye_color={character.eye_color}
                hair_color ={character.hair_color}
                edited={character.edited} />
            );
          })};
      </Container>
    );
  
  
};

export default CardDeck;