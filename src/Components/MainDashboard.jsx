import { useContext } from "react";
import { UserContext } from "./Context/userContext";
import { MyLocation, Place } from "@mui/icons-material";
import './Styles/MainDasboard.scss';

export default function MainDashboard() {
  const {
    location, setLocation,
    unit, temp, description,
    iconId, today, isSearch, setSearch
  } = useContext(UserContext);

  function handleSearchToggle() {
    setSearch(!isSearch);
    console.log(isSearch);
  }

  function handleMyLocation() {
    const defaultLocation = localStorage.getItem('myLocation');
    setLocation(defaultLocation);
  }

  const URL = `http://openweathermap.org/img/wn/${iconId}@4x.png`;

  return (
    <section>
      <nav>
        <button className="search-toggle-btn" onClick={handleSearchToggle}>
          Search for places
        </button>
        <div className="my-location-icon" onClick={handleMyLocation}>
          <MyLocation />
        </div>
      </nav>

      <section className="img-section" style={{backgroundImage: `url('/images/Cloud-background-dimmed.png')`}}>
        <img src={URL} alt={description} />
      </section>

      <main>
        <h1 className="temperature"><span className="temp">{temp}</span> <span className="unit">{unit === 'metric' ? `°C` : `°F`}</span></h1>
        <h2>{description}</h2>
        <p> Today · {today}</p>

        <div className="location">
          <Place className="place-icon"/>
          <h6>{location}</h6>
        </div>
      </main>
    </section>
  );
}
