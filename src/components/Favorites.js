import React, { useEffect } from "react";
import CampCard from "./CampCard";

function Favorites({ removeSite,  favoriteSites, setFavoriteSites }) {
    // const [favoriteSites, setFavoriteSites] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:6001/campSites")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Failed to fetch campsites");
        })
        .then((sites) => {
          const favorites = sites.filter((site) => site.initialIsFavorite);
          setFavoriteSites(favorites);
        })
        .catch((error) => {
          console.log("Error fetching campsites", error);
        });
    }, []);

    // function removeSite(siteId) {
    //     setFavoriteSites(favoriteSites.filter((site) => site.id !== siteId))
    // }

    const displayFavorites = favoriteSites.map((site) => (
        <CampCard key={site.id} site={site} setSites={setFavoriteSites} removeSite={removeSite} />
      ))

    const favorites = favoriteSites.length > 0 ? (<ul className="cards">{displayFavorites}</ul>) : (<p>Star Your Favorites to Add Here!</p>)
  
    return (
    <>
    <h2 className="favoriteHeader">Browse Your Favorites</h2>
      <div className="cards">
        {favorites}
      </div>
    </>
    );
  }

export default Favorites;