import { Link } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="log">
      <div className="land">
        <h1>Bienvenido a mi PI de Countries!</h1>
        <div className="ing">
          <Link to="/home">
            <button>Ingresar</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
