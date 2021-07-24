import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
    const { location } = rest;

    const user = {
        email: 'dip'
    }

    return (
        <>
            <Route {...rest} render={(props) => (
                user.email === "dip" ?
                    <Component {...props} />
                    : <Redirect to={{ pathname: "/login", state: { from: location } }} />
            )} />
        </>
    );
}

export default ProtectedRoute;