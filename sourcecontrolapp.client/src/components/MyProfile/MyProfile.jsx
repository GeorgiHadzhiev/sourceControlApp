/* eslint-disable react-refresh/only-export-components */
import Navheader from '../Navheader/Navheader.jsx'
import classes from './MyProfile.module.css'
import RepoCard from './RepoCard/RepoCard.jsx'
import repoService from '../../services/repoService.jsx'

import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext.jsx'
import { routeGuardIfLoggedIn } from '../../HOCs/routeGuards.jsx'

function MyProfile() {

    const { user } = useContext(AuthContext)
    const [repoes, setRepoes] = useState([])

    useEffect(() => {

        repoService.getRecent()
            .then(res => {

                setRepoes(res)

            })
            .catch(err => {

                console.log("Error in the MyProfile component")
                console.log(err)

            })

    }, [setRepoes])


    return (
        <>
            <Navheader />

            <h2 className={`${classes.mainHeader}`}>Recent Repoes</h2>
            <div className={`${classes.profileContainer}`}>

                <aside className={`${classes.sideContainer}`}>
                    <header className="sidebar">
                        <figure>
                            <img className={`${classes.profilePicture}`} src="./eyes.png" alt={`Profile picture of ${user.FirstName} ${user.LastName}`} />
                            <figcaption className={`${classes.figcaptionUsername}`}>userName</figcaption>
                        </figure>
                        <h1 className={`${classes.fullName}`}>{user.FirstName} {user.LastName}</h1>
                    </header>
                </aside>

                <main className={`${classes.mainProfile}`}>
                    <ol className={`${classes.itemsList}`}>
                        {repoes.map(repoData => <RepoCard key={repoData.Id} repo={repoData} />)}
                    </ol>
                </main>


            </div>

        </>
    );
}

export default routeGuardIfLoggedIn(MyProfile);