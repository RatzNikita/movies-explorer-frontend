import React from "react";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

const withLayout = (Component) => {
    return function WithLayout({...props}) {
        return (
            <>
                <Header/>
                <Component {...props}/>
                <Footer/>
            </>


        );
    };
};

export default withLayout;
