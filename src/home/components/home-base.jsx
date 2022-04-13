import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../_config/constants"

function SignUp(){
    const [email, setEmail] = useState('');
    let navigate = useNavigate();

    const onSubmitHandler = event => {
        event.preventDefault();

        fetch(`${instance()}/account/email/${email}`)
        .then(response => response.json())
        .then(dados => {
            if(dados === null){
                localStorage.setItem("fc_email", email);
                redirectUser();               
            }                
            else
                alert("This account is already in use.");
        })
        .catch(function(){
            alert("This account is already in use.");
        })
    }

    function redirectUser(){
        navigate('/signup');
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="input-group mt-3">
                <input type="email" 
                       className="form-control" 
                       placeholder="Email address" 
                       value={email}
                       onChange={event => setEmail(event.target.value)}
                       required/>
                <span className="btn-input-group">
                    <button type="submit" className="btn btn-success">Sign Up for free</button>    
                </span>
            </div>
        </form>
    )
}

export default SignUp;