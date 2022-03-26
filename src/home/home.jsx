import React from "react";

import SignUp from "./components/create-account-component";

import Lottie from "../components/home-money-saving";
import './style/home-style.css';

function Home() {
    return (
        <div className="row mt-5">
            <div className="col-5 mt-5">
                <h1 className="title-mkt">Organize your income and expenses</h1>
                <h5 className="mt-3">
                    Include your income and expenses to monitor 
                    your payment routine daily, be reminded of recurrences 
                    and know where your biggest expenses are.
                </h5>
                <SignUp />
            </div>
            <div className="col-7 mt-3">
                <Lottie />
            </div>
        </div>
    )
}

export default Home;