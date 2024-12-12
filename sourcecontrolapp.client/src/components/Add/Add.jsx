import ContributorsList from './ContributorsList/ContributorsList.jsx'
import ListGroup from 'react-bootstrap/ListGroup'
import { useState,useEffect,useRef } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import classes from './Add.module.css'

function Add() {


    let [contributors, setContrib] = useState([])
    const [remove, setRemove] = useState(false)
    const [contributorToRemove, setContributorToRemove] = useState("")
    const contributoursList = useRef()

    useEffect(() => {

        if (remove) {

            // eslint-disable-next-line react-hooks/exhaustive-deps
            contributors = contributors.filter(c => c !== contributorToRemove)
            setContrib(contributors)
            setRemove(false)

        }

    }, [remove,contributorToRemove])

    function onSubmitHanlder(e) {

        e.preventDefault()
        const formData = new FormData(e.currentTarget);

        const code = formData.get('code');
        const name = formData.get('repoName');
        const description = formData.get('description');
        const visibility = formData.get('visibility');
        const contributors = formData.get('contributors');

    }

    function contributorButton() {

        const contributorsArray = [...contributors, contributoursList.current.value]
        setContrib(contributorsArray)
        contributoursList.current.value = ""

    }

    return (
        <Form className={`${classes.addForm}`} onSubmit={onSubmitHanlder} method="POST">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" name="code">
                <Form.Label>Enter Code Here</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Name Your Repo</InputGroup.Text>
                <Form.Control
                    placeholder="Repository Name"
                    aria-label="Repository Name"
                    aria-describedby="basic-addon1"
                    name="repoName"
                />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Description</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" name="description" />
            </InputGroup>

            <br/>

            <div>
                {['radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3" name="visibility">
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
                    name="contributors"
                />
            </InputGroup>


            <ListGroup>
                {contributors.map(c => (<ContributorsList key={c} contributor={c} setRemove={setRemove} setContributorToRemove={setContributorToRemove} />))}
            </ListGroup>

            <br />

            <Button type="submit" variant="success">Submit</Button>
        </Form>

    )
}

export default Add