import React from "react";
import "./index.scss";

export default function Home() {
  return (
    <main>
      <div className="bannerContainer">
        <div className="banner">
          <h1>PokéApi</h1>
          <h2>The RESTful Pokémon API</h2>
          <p>Serving over 17,000,000 API calls each month!</p>
        </div>
      </div>
      <div className="callToDocsContainer">
        <div className="callToDocs">
          <p>
            All the Pokémon data you'll ever need in one place, easily
            accessible through a modern RESTful API.
          </p>
        </div>
      </div>
    </main>
  );
}
