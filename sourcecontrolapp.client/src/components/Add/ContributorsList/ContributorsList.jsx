import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import classes from './ContributorList.module.css'

// eslint-disable-next-line react/prop-types
function ContributorsList({ contributor,setRemove, setContributorToRemove }) {

    function onRemoveHandler() {

        setContributorToRemove(contributor)
        setRemove(true)

    }

    return (

        <div>
           <Button className={classes.button} onMouseDown={onRemoveHandler} variant="danger">-</Button>
           <ListGroup.Item className={classes.list}>{contributor}</ListGroup.Item>
        </div>

    );
}

export default ContributorsList;