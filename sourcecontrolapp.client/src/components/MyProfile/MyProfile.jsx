/* eslint-disable react-refresh/only-export-components */
import Navheader from '../Navheader/Navheader.jsx'
import classes from './MyProfile.module.css'

import { useEffect, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext.jsx'
import { routeGuardIfLoggedIn } from '../../HOCs/routeGuards.jsx'

function MyProfile() {

    const { user } = useContext(AuthContext)

    useEffect(() => {



    },[])


    return (
        <>
            <Navheader />

            <div className={`${classes.profileContainer}`}>

                <aside className={`${classes.sideContainer}`}>
                    <header className="sidebar">
                        <figure>
                            <img className={`${classes.profilePicture}`} src="./eyes.png" alt={`Profile picture of ${user.FirstName} ${user.LastName}`} />
                            <figcaption>{user.FirstName} {user.LastName}</figcaption>
                        </figure>
                        <h1>{user.FirstName} {user.LastName}</h1>
                    </header>
                </aside>

                <main className={`${classes.mainProfile}`}>
                    <ol className={`${classes.itemsList}`}>
                        <li className={`${classes.profileItem}`}>
                            <h2>Recent Repoes</h2>
                            <div className="repositories-grid">
                                <article>
                                    <h3><a href="#">AlbumRepo</a></h3>
                                    <p>For my Final ReactJS exam</p>
                                    <p>Language: <span>JavaScript</span></p>
                                    <span>Public</span>
                                </article>                     
                            </div>
                        </li>
                        <li className={`${classes.profileItem}`}>
                            <h2>Recent Repoes</h2>
                            <div className="repositories-grid">
                                <article>
                                    <h3><a href="#">AlbumRepo</a></h3>
                                    <p>For my Final ReactJS exam</p>
                                    <p>Language: <span>JavaScript</span></p>
                                    <span>Public</span>
                                </article>
                            </div>
                        </li>
                        <li className={`${classes.profileItem}`}>
                            <h2>Recent Repoes</h2>
                            <div className="repositories-grid">
                                <article>
                                    <h3><a href="#">AlbumRepo</a></h3>
                                    <p>For my Final ReactJS exam</p>
                                    <p>Language: <span>JavaScript</span></p>
                                    <span>Public</span>
                                </article>
                            </div>
                        </li>
                        <li className={`${classes.profileItem}`}>
                            <h2>Recent Repoes</h2>
                            <div className="repositories-grid">
                                <article>
                                    <h3><a href="#">AlbumRepo</a></h3>
                                    <p>For my Final ReactJS exam</p>
                                    <p>Language: <span>JavaScript</span></p>
                                    <span>Public</span>
                                </article>
                            </div>
                        </li>
                    </ol>
                </main>


            </div>

        </>
    );
}

export default routeGuardIfLoggedIn(MyProfile);