import React from 'react';
import Loader from "react-loader-spinner";

const MainLoader = () => {
    return (
        <div className="main-loader">
            <Loader
                type="Puff"
                color="#fff"
                height={100}
                width={100}
                timeout={3000}
            />
        </div>
    );
};

export default MainLoader;
