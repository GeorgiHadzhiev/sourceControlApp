/* eslint-disable react-refresh/only-export-components */
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { routeGuardIfNotLoggedIn } from '../../HOCs/routeGuards.jsx' 
import classes from './LandingPage.module.css';

function LandingPage() {
    return (

        <div className={`${classes.landingPage}`}>
            <h1>Hello, welcome to The Source Control</h1>
            <div className="mb-2">
                <Link to= "/login">
                    <Button variant="primary" size="lg">
                      Log In
                    </Button>                  
                </Link>
                {' '}<Link to="/register">
                    <Button variant="secondary" size="lg">
                      Register
                    </Button>
                </Link>
          </div>    
        </div>
        
  );
}

export default routeGuardIfNotLoggedIn(LandingPage);