import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (

        <div>
            <h1>Hello, welcome to The Source Control</h1>
            <div className="mb-2">
                <Link to= "/login">
                    <Button variant="primary" size="lg">
                      Log In
                    </Button>{' '}                   
                </Link>
                <Link to="/register">
                    <Button variant="secondary" size="lg">
                      Register
                    </Button>
                </Link>
          </div>    
        </div>
        
  );
}

export default LandingPage;