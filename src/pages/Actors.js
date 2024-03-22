// Actors.js
import { useState } from "react";
import actorsData from '../db.json'; // adjust the path to your JSON file as needed

function Actors() {
  const [actors] = useState(actorsData.actors);

  return (
    <>
      <header>
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;