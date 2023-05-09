import React from "react";

const PokemonName = ({ user }) => {
  return (
    <div>
      {user.map((Users) => (
        <div>
          <li key={Users.id} className="list-group-item">
            {Users.name}
          </li>
          <img
            className="pokemon-image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              Users.url.split("/")[6]
            }.png`}
            alt={Users.name}
          />
        </div>
      ))}
    </div>
  );
};

export default PokemonName;
