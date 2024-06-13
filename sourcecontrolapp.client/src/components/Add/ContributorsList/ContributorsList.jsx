import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

// eslint-disable-next-line react/prop-types
function ContributorsList({ contributor }) {
    return (

        <div>
           <Button variant="success">-</Button>
           <ListGroup.Item>{contributor}</ListGroup.Item>
        </div>

    );
}

export default ContributorsList;