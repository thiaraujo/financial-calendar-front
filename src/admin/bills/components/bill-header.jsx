import React from "react";

function Header(){

    return (
        <div>
            <div className="p-5 mt-4 mb-4 bg-light">
                <h1>Hello {localStorage.getItem("fc_first_name")}</h1>
                <label>Let's start creating your income and expenses portfolio.</label>
            </div>
            
        </div>
    )

}

export default Header;