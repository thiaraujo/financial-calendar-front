import React from "react";
import FormMoney from "../bills/components/create-bill"
import Header from "../bills/components/bill-header";

function Welcome(){

    return (
        <div>
            <Header />
            
            <h3>First, put in your main monthly income.</h3>
            <small>After this, you'll be able to continue send your income and expenses</small>

            <FormMoney type={true}/>
        </div>
    )

}

export default Welcome;