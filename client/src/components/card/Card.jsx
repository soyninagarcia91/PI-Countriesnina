import {Link} from 'react-router-dom'
import './card.css'

const Card = ({ flags, name, continents }) => {

    return(
        <div className='card'>

            <img src={flags.png}/>
            <div className="text">
                <h2>{name.official}</h2>
                <h3>{continents}</h3>
                <Link to= '/:cca3'>
                    <h4>See detail</h4>
                </Link>
            </div>
        </div>
    )
}

export default Card;