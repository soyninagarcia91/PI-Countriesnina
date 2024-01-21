import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const Detail = () => {
    const [country, setCountry] = useState({})
    let { cca3 } = useParams()
    useEffect(() => {
        axios(`http://localhost:5000/countries/${cca3}`).then((data) => {
          if (data) {
            setCountry(data);
          } else {
            window.alert('There is no country with that ID');
          }
        });
        return setCountry({});
      }, [cca3]);
    return(
        <div>
            {country.cca3 && <h1>ID:{country.cca3}</h1>}
            {country.name && <h1>Name:{country.name}</h1>}
            {country.continents && <h1>Continent/s:{country.continents}</h1>}
            {country.capital && <h1>Capital:{country.capital}</h1>}
            {country.area && <h1>Area:{country.area}</h1>}
            {country.population && <h1>Population:{country.population}</h1>}
            {country.flags && <img>{country.flags}</img>}
        </div>
    )
}

export default Detail