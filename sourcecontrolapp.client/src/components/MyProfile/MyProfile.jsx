/* eslint-disable react-refresh/only-export-components */
import { routeGuardIfLoggedIn } from '../../HOCs/routeGuards.jsx'
import Navheader from '../Navheader/Navheader.jsx'

function MyProfile() {

    return (
        <>
            <Navheader/>
            <p>Hello World!</p>
        </>
    );
}

export default routeGuardIfLoggedIn(MyProfile);