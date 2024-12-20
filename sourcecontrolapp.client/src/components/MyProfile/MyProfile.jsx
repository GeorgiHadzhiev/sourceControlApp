/* eslint-disable react-refresh/only-export-components */
import { routeGuardIfLoggedIn } from '../../HOCs/routeGuards.jsx'
import Navheader from '../Navheader/Navheader.jsx'

function MyProfile() {

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