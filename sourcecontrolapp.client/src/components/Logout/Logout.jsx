/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routeGuardIfLoggedIn } from '../../HOCs/routeGuards.jsx'

import { AuthContext } from "../../contexts/AuthContext.jsx";
import authService from "../../services/authService.jsx";

function Logout() {

    const navigate = useNavigate();

    const { user, logout } = useContext(AuthContext)
    useEffect(() => {

        authService.logout(user.accessToken)
            .then(() => {

                logout();
                navigate('/');

            },)

    }, [logout, navigate, user.accessToken])

    return <></>

}

export default routeGuardIfLoggedIn(Logout)