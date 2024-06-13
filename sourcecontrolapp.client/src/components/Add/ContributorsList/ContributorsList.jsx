import ListGroup from 'react-bootstrap/ListGroup';

// eslint-disable-next-line react/prop-types
function ContributorsList({ contributor }) {
    return (

       <ListGroup.Item>{contributor}</ListGroup.Item>

    );
}

export default ContributorsList;