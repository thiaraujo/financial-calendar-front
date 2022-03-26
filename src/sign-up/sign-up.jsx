import React from "react";

import NewAccount from "./components/sign-up-component";
import './style/sign-up-style.css'

function Sign(){

    return (
        <div className="lt-container mt-5">
            <div className="text-center mb-5">
                <h5>Welcome to Financial Calendar</h5>
                <span>Let's begin your organization</span>
            </div>

            <NewAccount />
        </div>
    )

}

export default Sign;