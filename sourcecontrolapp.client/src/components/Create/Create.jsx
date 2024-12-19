/* eslint-disable react-refresh/only-export-components */
import ContributorsList from './ContributorsList/ContributorsList.jsx'
import Navheader from '../Navheader/Navheader.jsx'
import ListGroup from 'react-bootstrap/ListGroup'
import { useState, useRef, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext.jsx'
import { routeGuardIfLoggedIn } from '../../HOCs/routeGuards.jsx'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import classes from './Add.module.css'
import repoService from '../../services/repoService.jsx'

function Add() {

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    let [contributors, setContrib] = useState([])
    const [remove, setRemove] = useState(false)
    const [contributorToRemove, setContributorToRemove] = useState("")
    const contributoursList = useRef()

    if (remove) {

        // eslint-disable-next-line react-hooks/exhaustive-deps
        contributors = contributors.filter(c => c !== contributorToRemove)
        setContrib(contributors)
        setRemove(false)

    }

    function onSubmitHanlder(e) {

        e.preventDefault()
        const formData = new FormData(e.currentTarget);

        const code = formData.get('code');
        const repoName = formData.get('repoName');
        const description = formData.get('description');
        const visibility = formData.get('visibility');

        repoService.create(code, repoName, description, visibility, contributors, user.Id)
            .then(res => {

                console.log(res)
                navigate('/MyProfile') 

            })
            .catch(err => {

                console.log(err)

            })

    }

    function contributorButton() {

        const contributorsArray = [...contributors, contributoursList.current.value]
        setContrib(contributorsArray)
        contributoursList.current.value = ""

    }

    return (
        <>
        <Navheader/>
        <Form className={`${classes.addForm}`} onSubmit={onSubmitHanlder} method="POST">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Code Here</Form.Label>
                <Form.Control as="textarea" rows={3} name="code" />
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

            <div className={`${classes.visRadio}`}>
                <input type="radio" name="visibility" value="Public"></input>
                <label htmlFor="Public">Public</label>

                <input type="radio" name="visibility" value="Private"></input>
                <label htmlFor="Private">Private</label>
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
                {contributors.map(c => (<ContributorsList key={c} contributor={c} setRemove={setRemove} setContributorToRemove={setContributorToRemove} name="contributors" />))}
            </ListGroup>

            <br />

            <Button type="submit" variant="success">Submit</Button>
        </Form>
        </>

    )
}

export default routeGuardIfLoggedIn(Add)