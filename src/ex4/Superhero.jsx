import React from 'react';

const Superhero = (props) => {
  const {
    name, fullName, aliases, race, gender, groupAffilation,
    intelligence, strength, speed, durability, power, combat,
  } = props;
  return (
    <div className="categorie" id="appearance">
      <h2>{name}</h2>
      <p>{`Fullname: ${fullName}`}</p>
      <p>{`Aliases: ${aliases}`}</p>
      <p>{`Race: ${race}`}</p>
      <p>{`Gender: ${gender}`}</p>
      <p>{`GroupAffilation: ${groupAffilation}`}</p>
      <div className="powerStats">
        <p>{`Intelligence: ${intelligence}`}</p>
        <p>{`Strength: ${strength}`}</p>
        <p>{`Speed: ${speed}`}</p>
        <p>{`Durability: ${durability}`}</p>
        <p>{`Power: ${power}`}</p>
        <p>{`Combat: ${combat}`}</p>
      </div>
      <br />
    </div>
  );
};

export default Superhero;
