import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import icon1 from "./assets/email.svg";
import icon2 from "./assets/location.svg";
import icon3 from "./assets/phone.svg";

function App() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));
  };
  console.log(data);
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="container">
      {data.map((person) => {
        const { name, email, cell, location, dob, registered, picture } =
          person;
        return (
          <div className="card">
            <div className="pic-name row">
              <img src={picture.large} alt="" />
              <h3>
                {name.title} {name.first} {name.last}
              </h3>
            </div>
            <div className="email row">
              <img src={icon1} alt="email" className="icon" />
              <p>{email}</p>
            </div>
            <div className="tel row">
              <img src={icon3} alt="cell" className="icon" />
              <p>{cell}</p>
            </div>
            <div className="location row">
              <img src={icon2} alt="location" className="icon" />
              <p>
                {location.city} - {location.country}
              </p>
            </div>
            <div className="age-register">
              <p>{dob.age}</p>
              <p>Register Date: {registered.date.slice(0, 10)}</p>
            </div>
          </div>
        );
      })}

      <button onClick={handleClick}>Random User</button>
    </div>
  );
}

export default App;
