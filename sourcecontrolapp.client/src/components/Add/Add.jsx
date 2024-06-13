import ContributorsList from './ContributorsList/ContributorsList.jsx'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState,useRef } from 'React'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import classes from './Add.module.css';

function Add() {

    const [contributors, setContrib] = useState([])
    const contributoursList = useRef();

    function onSubmitHanlder(e) {

        e.preventDefault()

        console.log("Hey, this works!")

    }

    function contributorButton() {

        const next = [...contributors, contributoursList.current.value]
        setContrib(next)

        console.log(contributors)

    }

    return (
        <Form className={`${classes.addForm}`} onSubmit={onSubmitHanlder} method="POST">
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Name Your Repo</InputGroup.Text>
                <Form.Control
                    placeholder="Repository Name"
                    aria-label="Repository Name"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Description</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>

            <br/>

            <div>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                        <Form.Check                            
                            label="Public"
                            name="group1"
                            type={type}
                            id={`default-${type}-1`}
                        />
                        <Form.Check
                            
                            label="Private"
                            name="group1"
                            type={type}
                            id={`default-${type}-2`}
                        />
                    </div>
                ))}
            </div>

            <br />

            <Form.Label htmlFor="inputPassword5">Add Contributors</Form.Label>
            <InputGroup className="mb-3">
                <Button variant="success" onMouseDown={contributorButton}>+</Button>
                <Form.Control
                    ref={contributoursList}
                    placeholder="Contributors Emails"
                    aria-label="Contributors Emails"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>


            <ListGroup>
                {contributors.map(c => (<ContributorsList key={c} contributor={c}/>))}
            </ListGroup>


            <Button type="submit" variant="success">Submit</Button>
        </Form>

    )
}

export default Add;