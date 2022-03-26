import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function NewAccount(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const onSubmitHandler = event => {
        event.preventDefault();

        if(password.length < 6){
            alert("Your password must have at least 6 characters")
            return;
        }

        const user = {
            Email: {
                address: localStorage.getItem("fc_email")
            },
            Name: {
                firstName: firstName,
                lastName: lastName
            },
            Password: password
        }

        fetch("https://localhost:7087/v1/authentication", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                if(data === null || data.id === null) {
                    alert("Your account can't be created, try again later!")
                }
                else
                {
                    alert("Your account has been created successfully!")

                    // Save data
                    localStorage.setItem("fc_jwt_token", data.jwtToken);
                    localStorage.setItem("fc_first_name", user.Name.firstName);
                    localStorage.setItem("fc_last_name", user.Name.lastName);

                    setFirstName('');
                    setLastName('');
                    setPassword('');

                    redirectUser();
                }
            })
    }

    function redirectUser(){
        navigate('/admin/welcome');
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Enter your email</label>
                            <input type="email" 
                                   className="form-control"
                                   value={localStorage.getItem("fc_email")} 
                                   disabled/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Enter your first name</label>
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="Type your first name"
                                   value={firstName}
                                   onChange={event => setFirstName(event.target.value)}
                                   required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Enter your last name</label>
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="Type your last name"
                                   value={lastName}
                                   onChange={event => setLastName(event.target.value)}
                                   required />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Create a password</label>
                            <input type="password" 
                                   className="form-control" 
                                   placeholder="min length 6"
                                   value={password}
                                   onChange={event => setPassword(event.target.value)}
                                   required 
                                   minLength={6}/>
                        </div>
                    </div>

                    <div className="col-12 form-group mt-3">
                        <button type="submit" className="w-100 btn btn-primary btn-lg">Create my account</button>    
                    </div>
                </div>
            </form>
        </>
    )

}

export default NewAccount;