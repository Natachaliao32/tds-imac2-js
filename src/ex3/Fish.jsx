import React from 'react';

const Fish = (props) => {
  const { id, size, setSize } = props;

  let fish = '><';
  for (let i = 0; i < size; i += 1) {
    fish += '=';
  }
  fish += '°>';

  return (
    <div>
      <p>{fish}</p>
      <button type="button" onClick={() => setSize(id, size - 1)}>-</button>
      <button type="button" onClick={() => setSize(id, size + 1)}>+</button>
    </div>
  );
};

export default Fish;
