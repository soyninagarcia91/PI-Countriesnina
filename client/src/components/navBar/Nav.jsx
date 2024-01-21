import { Link } from "react-router-dom"
import './Nav.css'

const Nav = () => {
    return(
        <div className="allNav">
            <div className="left">
                <Link to= '/home'>
                    <p>Home</p>
                </Link>
                <Link to= '/wishlist'>
                    <p>Wishlist</p>
                </Link>
                <Link to='/about'>
                    <p>About me</p>
                </Link>
                <Link to= '/create'>
                    <p>Create activity</p>
                </Link>
            </div>
            
            <div className="right">
                <Link to='/'>
                    <p>Log out</p>
                </Link>
            </div>
            
        </div>
    )
}

export default Nav