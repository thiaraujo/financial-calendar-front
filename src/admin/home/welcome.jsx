import React from "react";
import Form from "./components/form-money-component";

function Welcome(){

    return (
        <div>
            <div className="p-5 mt-4 mb-4 bg-light">
                <h1>Hello {localStorage.getItem("fc_first_name")}</h1>
                <label>Let's start creating your income and expenses portfolio.</label>
            </div>
            
            <h3>First, put in your main monthly income.</h3>
            <small>After this, you'll be able to continue send your income and expenses</small>

            <Form type={true}/>
        </div>
    )

}

export default Welcome;