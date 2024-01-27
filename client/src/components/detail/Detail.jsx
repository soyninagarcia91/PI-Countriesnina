import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [country, setCountry] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3002/countries/`)
      .then((res) => res.json())
      .then((data) => {
        const filteredCountry = data.find((c) => c.cca3 === id);
        if (filteredCountry) {
          setCountry(filteredCountry);
        } else {
          alert("No se encontró un país con ese id");
        }
      })
      .catch((err) => window.alert("No existe pais con ese id"));
  }, [id]);

  return (
    <div>
      {country.cca3 && <h1>ID:{country.cca3}</h1>}
      {country.nameOfficial && <h1>Official name:{country.nameOfficial}</h1>}
      {country.nameCommon && <h1>Common name:{country.nameCommon}</h1>}
      {country.continent && <h1>Continent/s:{country.continent}</h1>}
      {country.capital && <h1>Capital:{country.capital}</h1>}
      {country.area && <h1>Area:{country.area}</h1>}
      {country.population && <h1>Population:{country.population}</h1>}
      {country.flag && <img src={country.flag}></img>}
    </div>
  );
};

export default Detail;
