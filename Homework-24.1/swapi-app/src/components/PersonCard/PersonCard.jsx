import React from "react";
import "./PersonCard.css";

function PersonCard({ person }) {
  return (
    <div className="card person-card">
      <div className="card-body">
        <h5 className="card-title">{person.name}</h5>
        <div className="card-text">
          {person.height && (
            <p>
              <span>Height: </span>
              {person.height} cm
            </p>
          )}
          {person.mass && (
            <p>
              <span>Mass: </span>
              {person.mass} kg
            </p>
          )}
          {person.hair_color && (
            <p>
              <span>Hair color: </span>
              {person.hair_color}
            </p>
          )}
          {person.skin_color && (
            <p>
              <span>Skin color: </span>
              {person.skin_color}
            </p>
          )}
          {person.eye_color && (
            <p>
              <span>Eye color: </span>
              {person.eye_color}
            </p>
          )}
          {person.birth_year && (
            <p>
              <span>Birth year: </span>
              {person.birth_year}
            </p>
          )}
          {person.gender && (
            <p>
              <span>Gender: </span>
              {person.gender}
            </p>
          )}
          {person.homeworld && (
            <p>
              <span>Homeworld: </span>
              <a href={person.homeworld}>{person.homeworld}</a>
            </p>
          )}
          {person.films.length > 0 && (
            <p>
              <span>Films: </span>
              {person.films.map((film, index) => (
                <ul key={index}>
                  <li>
                    <a href={film}>{film}</a>
                  </li>
                </ul>
              ))}
            </p>
          )}
          {person.species.length > 0 && (
            <p>
              <span>Species: </span>
              {person.species.map((specie, index) => (
                <ul key={index}>
                  <li>
                    <a href={specie}>{specie}</a>
                  </li>
                </ul>
              ))}
            </p>
          )}
          {person.vehicles.length > 0 && (
            <p>
              <span>Vehicles: </span>
              {person.vehicles.map((vehicle, index) => (
                <ul key={index}>
                  <li>
                    <a href={vehicle}>{vehicle}</a>
                  </li>
                </ul>
              ))}
            </p>
          )}
          {person.starships.length > 0 && (
            <p>
              <span>Starships: </span>
              {person.starships.map((starship, index) => (
                <ul key={index}>
                  <li>
                    <a href={starship}>{starship}</a>
                  </li>
                </ul>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
