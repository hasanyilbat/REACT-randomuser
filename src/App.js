import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import icon1 from "./assets/email.svg";
import icon2 from "./assets/location.svg";
import icon3 from "./assets/phone.svg";

function App() {
  const [data, setData] = useState();

  const handleClick = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setData(res.data.results))
      .catch((err) => console.log(err));

    console.log(data);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (

    <div className="container">
      {card.map(person) => (
         return(<div className="card">
        <div>
          <img src="" alt="" />
          <h3>isim soyad</h3>
        </div>
        <div className="email">
          <img src={icon1} alt="" className="icon" />
          <p>email</p>
        </div>
        <div className="tel">
          <img src={icon2} alt="" className="icon" />
          <p>tel</p>
        </div>
        <div className="location">
          <img src={icon3} alt="" className="icon" />
          <p>location</p>
        </div>
        <div className="age-register">
          <p></p>
          <p></p>
        </div>) }
      )
     

      </div>
      <button onClick={handleClick}>Random User</button>
    </div>
  );
}

export default App;
