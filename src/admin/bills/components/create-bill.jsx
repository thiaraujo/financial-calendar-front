import React, { useState } from "react";

import '../style/bill-form-money.css';

function FormMoney(props){
    
    const incomeType = [
        {
            value: 0,
            text: 'Income'
        },
        {
            value: 1,
            text: 'Expense'
        }
    ];

    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const invoice = {
        Type: type,
        Description: description,
        Value: value
    }

    const onSubmitHandler = event =>{
        event.preventDefault();

        if(invoice.Description === null || invoice.value === null){
            alert("You must fill all fields to continue.");
            return;
        }
    }

    return (
        <div className="card border-primary mb3">
            <div className="card-body">
                <form className="mt-1" onSubmit={onSubmitHandler}>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="form-inline">
                                <label>Type</label><br />
                                <input type="radio" 
                                    className="form-check-input"
                                    name="type"
                                    value={incomeType[0].value} 
                                    id={incomeType[0].text}
                                    onChange={event => setType(event.target.value)}
                                    checked/>
                                <label htmlFor={incomeType[0].text} 
                                       className="form-check-label ml-3">
                                    {incomeType[0].text}
                                </label>
                                
                                <input type="radio" 
                                    className="form-check-input"
                                    name="type"
                                    value={incomeType[1].value} 
                                    id={incomeType[1].text}
                                    onChange={event => setType(event.target.value)}
                                    disabled={props.type}/>
                                <label htmlFor={incomeType[1].text} 
                                       className="form-check-label ml-3">
                                    {incomeType[1].text}
                                </label>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" 
                                    className="form-control"
                                    value={description} 
                                    onChange={event => setDescription(event.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Value</label>
                                <input type="text" 
                                    className="form-control"
                                    value={value} 
                                    onChange={event => setValue(event.target.value)}
                                    required/>
                            </div>
                        </div>
                        <div className="col-md-2 mt-4">
                            <button type="submit" className="btn btn-success">Confirm income</button>
                        </div>              
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormMoney;