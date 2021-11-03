import React from 'react'

export default function fav() {
    return (
        
  const [favCards, setFavCards] = useState(fav);

  const searchCards = (e) => {
    const value = e.target.value.toLowerCase();
    if (value !== "") {
      setFavCards(
        favCards.filter((city) => {
          const cityName = city.name.toLowerCase();
          if (cityName.includes(value)) return city;
          else return null;
        })
      );
    } else {
      setFavCards(favCities);
    }
  };

  return (
    <>
      <Options searchCards={searchCards} />
      <div className="cardsWrapper">
        <div className="cards">
          {favCards.map((city) => {
            return (
              <div
                className="card"
                onClick={() => cardRoute(city.id)}
                key={city.id}
      
        <div>
            
        </div>
    )
}

