import React, { useState } from "react";
import CampCard from "./CampCard";

function Favorites({ sites }) {
    const [favoriteSites, setFavoriteSites ] = useState(sites.filter((site) => site.initialIsFavorite))

    return (

        <div>
            {favoriteSites.length > 0 ? (
                <ul>
                    {favoriteSites.map((site) => (
                        <CampCard key={site.id} site={site} setSites={setFavoriteSites} />
                    ))}
                </ul>
            ) : (
        <p>Choose Some Favorites!</p>
      )}
    </div>
  );
}

export default Favorites;