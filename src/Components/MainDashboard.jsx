import { MyLocation, Place } from "@mui/icons-material";
import { useContext } from "react";
import { UserContext } from "./Context/userContext.jsx";
import "./Styles/MainDasboard.scss";
// import cloudy from '../../public/images/Cloud-background.png';

export default function MainDashboard() {
  // const [weather, setWeather] = useState()

  // const getWeather = async () =>{
  //     const rs = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=69644e28c6a9c6d7c04f95ff1035a799&units=${unit}`);
  //     const rsjson = await rs.json();
  //     setWeather(rsjson.current)

  // }

  // useEffect(() =>{
  //     getWeather()
  // }, [])

  const {
    location,
    setLocation,
    unit,
    temp,
    description,
    iconId,
    today,
    isSearch,
    setIsSearch,
  } = useContext(UserContext);

  function handleSearchToggle() {
    setIsSearch(!isSearch);
    console.log(isSearch);
  }

  function handleMyLocation() {
    const defaultLocal = localStorage.getItem("myLocation");
    setLocation(defaultLocal);
  }

  const ICONURL = `http://openweathermap.org/img/wn/${iconId}@4x.png`;

  return (
    <section className="Main-Dashboard">
      <nav>
        <button className="search-toggle-btn" onClick={handleSearchToggle}>
          Search for places
        </button>
        <div className="my-location-icon" onClick={handleMyLocation}>
          <MyLocation />
        </div>
      </nav>

      <section className="img-section">
      <div className="background-image"></div>
        <img src={ICONURL} alt={description} />
      </section>

      <main>
        <h1 className="temperature">
          <span className="temp">{temp}</span>{" "}
          <span className="unit">{unit === "metric" ? `°C` : `°F`}</span>
        </h1>
        <h2>{description}</h2>
        <p> Today · {today}</p>

        <div className="location">
          <Place className="place-icon" />
          <h6>{location}</h6>
        </div>
      </main>
    </section>
  );
}
