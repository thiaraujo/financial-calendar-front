import React from "react";
import FormOrganization from "./components/create-organization";
import Header from "../bills/components/bill-header";

function Welcome(){

    return (
        <div>
           <Header />
            
            <h3>What organization do you want manage?</h3>
            <small>You can create any and how many organization what you want, eg; Home, Personal, My company.</small>

            <FormOrganization />
        </div>
    )

}

export default Welcome;