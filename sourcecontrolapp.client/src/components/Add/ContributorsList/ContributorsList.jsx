import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import classes from './ContributorList.module.css'

// eslint-disable-next-line react/prop-types
function ContributorsList({ contributor }) {
    return (

        <div>
            <Button className={classes.button} variant="danger">-</Button>
           <ListGroup.Item className={classes.list}>{contributor}</ListGroup.Item>
        </div>

    );
}

export default ContributorsList;