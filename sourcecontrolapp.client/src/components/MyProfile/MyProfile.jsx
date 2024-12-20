/* eslint-disable react-refresh/only-export-components */
import Navheader from '../Navheader/Navheader.jsx'

import { useEffect } from 'react'
import { routeGuardIfLoggedIn } from '../../HOCs/routeGuards.jsx'

function MyProfile() {


    useEffect(() => {



    },[])


    return (
        <>
            <Navheader />

            <div className="container">
                <div className="layout">
                    <div className="sidebar">
                    </div>
                    <div className="main">
                    </div>
                </div>
            </div>
        </>
    );
}

export default routeGuardIfLoggedIn(MyProfile);