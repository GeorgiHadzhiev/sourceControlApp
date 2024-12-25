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

                <aside className="sidebar-container">
                    <header className="sidebar">
                        <figure>
                            <img src="profile-picture.jpg" alt={`Profile picture of ${user.FirstName} ${user.LastName}`} />
                            <figcaption>{user.FirstName} {user.LastName}</figcaption>
                        </figure>
                        <h1>{user.FirstName} {user.LastName}</h1>
                    </header>
                </aside>

                <main className="main-profile">
                    <section className="profile">
                        <h2>Recent Repoes</h2>
                        <div className="repositories-grid">
                            <article>
                                <h3><a href="#">AlbumRepo</a></h3>
                                <p>For my Final ReactJS exam</p>
                                <p>Language: <span>JavaScript</span></p>
                                <span>Public</span>
                            </article>                     
                        </div>
                    </section>
                </main>


            </div>

        </>
    );
}

export default routeGuardIfLoggedIn(MyProfile);