import { useContext } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext.jsx'


export const routeGuardIfNotLoggedIn = (Component) => {

    const WrapperComponent = (props) => {

        const { user } = useContext(AuthContext);

        return !user.Id
            ? <Component {...props} />
            : <Navigate to="/MyProfile" />

    }

    return WrapperComponent;

}

export const routeGuardIfLoggedIn = (Component) => {

    const WrapperComponent = (props) => {

        const { user } = useContext(AuthContext);

        return user.Id
            ? <Component {...props} />
            : <Navigate to="/" />

    }

    return WrapperComponent;

}

export const routeGuardOwner = (Component) => {

    const WrapperComponent = (props) => {

        const { user } = useContext(AuthContext);
        const { albumId } = useParams();
        const [album] = useAlbumState(albumId);


        return user._id === album._ownerId || album._ownerId === undefined
            ? <Component {...props} />
            : <Navigate to="/" />

    }

    return WrapperComponent;

};