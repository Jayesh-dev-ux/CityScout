import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  if (isLoading) return <Spinner />;

  const { cityName, emoji, date, notes, country } = currentCity;

  async function placeSearch(event) {
    const newCityName = currentCity.cityName;
    const newCountryName = currentCity.country;
    console.log(newCityName);
    console.log(newCountryName);
    event.preventDefault();
    try {
      const searchParams = new URLSearchParams({
        query: "Restaurant",
        near: `${newCityName},${newCountryName}`,
        sort: "DISTANCE",
      });
      const results = await fetch(
        `https://api.foursquare.com/v3/places/search?${searchParams}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "fsq37IZxsl3TsFZF0vP8DyPczwJFgylF5xWQ9Tlflgw0lYk=",
          },
        }
      );
      const data = await results.json();
      const restaurants = data.results.map((venue) => ({
        name: venue.name,
        address: venue.location.formatted_address,
      }));

      setRestaurants(restaurants);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h3 className={styles.text}>{cityName}</h3>
      </div>
      <div>
        {restaurants.length === 0 ? (
          <button
            className={styles.btn}
            onClick={(event) => placeSearch(event)}
          >
            Search Restaurant
          </button>
        ) : (
          <ol className={styles.element}>
            {restaurants.map((restaurant, index) => (
              <li key={index}>
                <ul>
                  <li>Name: {restaurant.name}</li>
                  <li>Address: {restaurant.address}</li>
                </ul>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
