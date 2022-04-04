import React, { useState } from "react";

import Form from "../bills/components/create-bill";
import ListInvoices from "../bills/components/bills-list";

function Invoices() {
 
    const [opened, setStateModal] = useState([]);

    return (
        <div>
            <div className="p-5 mt-4 mb-4 bg-light">
                <h1>Hello {localStorage.getItem("fc_first_name")}</h1>
                <label>Track your monthly statement below</label>
            </div>
            
            <div className="card bg-light mb-3">
                <h3 className="card-header">
                    <div className="row">
                        <div className="col-md-10">
                            Your invoices
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary btn-block" 
                                    type="button"
                                    onClick={event => setStateModal(opened ? false : true)}>
                                Add Invoice
                            </button>    
                        </div>
                    </div>
                </h3>
                <div className="card-body">

                    <div className={"collapse multi-collapse " + (opened ? "show" : "")} id="addInvoice">
                        <Form />
                    </div>

                    <ListInvoices />

                </div>
            </div>
        </div>        
    )
}

export default Invoices;