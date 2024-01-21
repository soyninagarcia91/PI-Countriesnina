import Card from "../card/Card"
import './cards.css'

const Cards = ({ countries }) => {
    return(
        <div className="cards">
            {countries.map(({ cca3, name, continents, flags, capital, area, population}) => (
                <Card 
                    key={cca3}
                    id={cca3}
                    name={name.official}
                    continent={continents}
                    flags={flags.png}
                    capital={capital}
                    area={area}
                    population={population}
                    countries={countries}
                />
            ))}
        </div>
    )
}

export default Cards

