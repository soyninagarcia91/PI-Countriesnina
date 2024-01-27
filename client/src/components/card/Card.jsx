import { Link } from "react-router-dom";
import "./card.css";

const Card = (countries) => {
  return (
    <div className="card">
      <div className="top">
        <img src={countries.flag} />
      </div>

      <div className="text">
        <h2>{countries.nameCommon}</h2>
        <p>
          <span>Continent: {countries.continent} </span>
        </p>
        <p>
          <span>population: </span>
          {countries.population}
        </p>
        <Link to={`/detail/${countries.id}`}>
          <button>Learn more</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
