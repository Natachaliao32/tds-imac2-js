import React, { useEffect, useState } from 'react';
import './ex4.css';
import Superhero from './Superhero';

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  return (
    <div>
      <p>Do something with superheroes in there</p>
      {superheroes.map((superhero, i) => (
        <Superhero
          key={i.toString()}
          name={superhero.name}
          fullName={superhero.biography.fullName}
          aliases={superhero.biography.aliases}
          race={superhero.appearance.race}
          gender={superhero.appearance.gender}
          groupAffilation={superhero.connections.groupAffilation}
          intelligence={superhero.powerstats.intelligence}
          strength={superhero.powerstats.intelligence}
          speed={superhero.powerstats.speed}
          durability={superhero.powerstats.durability}
          power={superhero.powerstats.power}
          combat={superhero.powerstats.combat}
        />
      ))}
    </div>
  );
};
