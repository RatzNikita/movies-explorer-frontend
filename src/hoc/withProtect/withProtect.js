import React from "react";
import {AppContext} from "../../components/context/AppContext";
import {Navigate} from "react-router-dom";

const withProtect = (Component) => {
    return function WithLayout({...props}) {
        const {loggedIn} = React.useContext(AppContext)
        if (loggedIn !== null) {
            return (
                <>
                    {loggedIn
                        ? <Component {...props}/>
                        : <Navigate to="/" replace/>
                    }
                </>
            );
        }
    };
};

export default withProtect