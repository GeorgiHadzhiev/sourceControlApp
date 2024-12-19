/* eslint-disable react-refresh/only-export-components */
import { routeGuardIfLoggedIn } from '../../HOCs/routeGuards.jsx'

function MyProfile() {


    return (
        <p>Hello World!</p>
    );
}

export default routeGuardIfLoggedIn(MyProfile);