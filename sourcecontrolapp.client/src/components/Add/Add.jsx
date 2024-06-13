import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import classes from './Add.module.css';

function Add() {

    let contributors = [];
    function contributorButton() {

        let inputEl = document.getElementById("_contributors")
        contributors.push(inputEl.value)

        console.log(contributors)

    }

    return (
        <div className={`${classes.addForm}`} >
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

            <Form>
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
            </Form>

            <br />

            <Form.Label htmlFor="inputPassword5">Add Contributors</Form.Label>
            <InputGroup className="mb-3">
                <Button variant="success" onMouseDown={contributorButton}>+</Button>
                <Form.Control
                    id="_contributors"
                    placeholder="Contributors Emails"
                    aria-label="Contributors Emails"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>




            

        </div>

    )
}

export default Add;