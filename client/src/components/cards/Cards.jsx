import { useEffect, useState } from "react"
import Card from "../card/Card"
import './cards.css'

const Cards = ({ countries }) => {

    return(
        <div className="cards">
            
            {countries.map(({ cca3, nameOfficial, nameCommon, region, flag, capital, area, population}, key) => (
                <Card 
                    key={key}
                    id={cca3}
                    nameCommon={nameCommon}
                    nameOfficial={nameOfficial}
                    continent={region}
                    flag={flag}
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

