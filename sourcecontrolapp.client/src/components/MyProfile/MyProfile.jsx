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
                            <figcaption className={`${classes.figcaptionUsername}`}>userName</figcaption>
                        </figure>
                        <h1 className={`${classes.fullName}`}>{user.FirstName} {user.LastName}</h1>
                    </header>
                </aside>

                <main className={`${classes.mainProfile}`}>
                    <h2>Recent Repoes</h2>
                    <ol className={`${classes.itemsList}`}>
                        <li className={`${classes.profileItem}`}>
                            <article className={`${classes.profileItemArticle}`}>
                                <div className={`${classes.profileItemArticleTop}`}>
                                    <h3>Album Repo</h3>
                                    <span id={`${classes.visSpanContainer}`}>
                                        <span id={`${classes.visSpan}`}>Public</span>
                                    </span>
                                </div>
                                <p>For my Final ReactJS exam</p>
                                <p>Language: JavaScript </p>
                            </article> 
                        </li>
                        <li className={`${classes.profileItem}`}>
                            <article className={`${classes.profileItemArticle}`}>
                                <div className={`${classes.profileItemArticleTop}`}>
                                    <h3>Album Repo</h3>
                                    <span id={`${classes.visSpanContainer}`}>
                                        <span id={`${classes.visSpan}`}>Public</span>
                                    </span>
                                </div>
                                <p>For my Final ReactJS exam</p>
                                <p>Language: JavaScript </p>
                            </article>
                        </li>
                        <li className={`${classes.profileItem}`}>
                            <article className={`${classes.profileItemArticle}`}>
                                <div className={`${classes.profileItemArticleTop}`}>
                                    <h3>Album Repo</h3>
                                    <span id={`${classes.visSpanContainer}`}>
                                        <span id={`${classes.visSpan}`}>Public</span>
                                    </span>
                                </div>
                                <p>For my Final ReactJS exam</p>
                                <p>Language: JavaScript </p>
                            </article>
                        </li>
                        <li className={`${classes.profileItem}`}>
                            <article className={`${classes.profileItemArticle}`}>
                                <div className={`${classes.profileItemArticleTop}`}>
                                    <h3>Album Repo</h3>
                                    <span id={`${classes.visSpanContainer}`}>
                                        <span id={`${classes.visSpan}`}>Public</span>
                                    </span>
                                </div>
                                <p>For my Final ReactJS exam</p>
                                <p>Language: JavaScript </p>
                            </article>
                        </li>
                        <li className={`${classes.profileItem}`}>
                            <article className={`${classes.profileItemArticle}`}>
                                <div className={`${classes.profileItemArticleTop}`}>
                                    <h3>Album Repo</h3>
                                    <span id={`${classes.visSpanContainer}`}>
                                        <span id={`${classes.visSpan}`}>Public</span>
                                    </span>
                                </div>
                                <p>For my Final ReactJS exam</p>
                                <p>Language: JavaScript </p>
                            </article>
                        </li>
                        <li className={`${classes.profileItem}`}>
                            <article className={`${classes.profileItemArticle}`}>
                                <div className={`${classes.profileItemArticleTop}`}>
                                    <h3>Album Repo</h3>
                                    <span id={`${classes.visSpanContainer}`}>
                                        <span id={`${classes.visSpan}`}>Public</span>
                                    </span>
                                </div>
                                <p>For my Final ReactJS exam</p>
                                <p>Language: JavaScript </p>
                            </article>
                        </li>
                    </ol>
                </main>


            </div>

        </>
    );
}

export default routeGuardIfLoggedIn(MyProfile);