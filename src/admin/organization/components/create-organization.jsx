import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authHeader } from "../../../_helpers/auth-header";

function FormOrganization(){
    let navigate = useNavigate();
    const types = [
        {
            value: 1,
            text: 'Personal'
        },
        {
            value: 2,
            text: 'Business'
        }
    ];
    
    const [organizationType, setOrganizationType] = useState(1  );
    const [name, setPath] = useState('');
    const [description, setDescription] = useState('');

    const organization = {
        Identification: {
            Path: name,
            Description: description
        },
        OrganizationType: organizationType,
        Image: ""
    }
     
    const onSubmitHandler = event =>{
        event.preventDefault();
        
        if(organization.Description === null || organization.OrganizationType < 1){
            alert("You must fill all fields to continue.");
            return;
        }

        fetch("https://localhost:7087/v1/organization", {
            method: 'POST',
            headers: authHeader(),
            body: JSON.stringify(organization)
        })
            .then(response => response.json())
            .then(data => {
                if(data === null || data.id === null) {
                    alert("Your organization can't be created, try again later!")
                }
                else
                {
                    console.log(data);
                    alert("Your organization has been created successfully!")

                    // Save data
                    localStorage.setItem("fc_organization_id", data.id);
                    localStorage.setItem("fc_organization_path", data.identification.path);

                    redirectUser();      
                }
            })
    }

    function redirectUser(){
        navigate('/admin/welcome');
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
                                    value={types[0].value} 
                                    id={types[0].text}
                                    onChange={event => setOrganizationType(event.target.value)}
                                    checked/>
                                <label htmlFor={types[0].text} 
                                       className="form-check-label ml-3">
                                    {types[0].text}
                                </label>
                                
                                <input type="radio" 
                                    className="form-check-input"
                                    name="type"
                                    value={types[1].value} 
                                    id={types[1].text}
                                    disabled={true}/>
                                <label htmlFor={types[1].text} 
                                       className="form-check-label ml-3">
                                    {types[1].text}
                                </label>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <label>Path</label>
                                <input type="text" 
                                    className="form-control"
                                    placeholder="eg: personal-bills"
                                    value={name} 
                                    onChange={event => setPath(event.target.value)}
                                    required />
                            </div>
                        </div>
                       <div className="col-md-5">
                            <div className="form-group">
                                <label>Description</label>
                                <input type="text" 
                                    className="form-control"
                                    placeholder="eg: Personal bills"
                                    value={description} 
                                    onChange={event => setDescription(event.target.value)}
                                    required />
                            </div>
                        </div>
                        <div className="col-md-2 mt-4">
                            <button type="submit" className="btn btn-success">Confirm organization</button>
                        </div>              
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormOrganization;