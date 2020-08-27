import React, { useState, useEffect } from 'react';

const AccountForm = props => {

    const handleFieldChange = e => {
        const updatedInfo = {...props.customer}
        if (e.target.name === "first_name" || e.target.name === "last_name") {
            updatedInfo.user[e.target.name] = e.target.value
        }
        else {
            updatedInfo[e.target.name] = e.target.value
        }
        props.setCustomer(updatedInfo)
    }

    const editAccount = e => {
        e.preventDefault()
        let userCustomer = {...props.customer.user}
        userCustomer["address"] = props.customer.address
        userCustomer["phone_number"] = props.customer.phone_number    
        fetch(`http://localhost:8000/customer/${props.customer.id}`, {
            "method": "PUT",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            },
            "body": JSON.stringify(userCustomer)
        })
            .then(() => {
                props.history.push('/account')
            })
    }

    useEffect(() => {
        props.getCustomer()
    }, [])
    
    return (
        <form className="account_form" onSubmit={editAccount}>
            <fieldset>
                <label htmlFor="first_name">First Name</label>
                <input className="account_input" name="first_name" placeholder="First Name" value={props.customer.user.first_name} onChange={handleFieldChange} />
            </fieldset>
            <fieldset>
                <label htmlFor="last_name">Last Name</label>
                <input className="account_input" name="last_name" placeholder="Last Name" value={props.customer.user.last_name} onChange={handleFieldChange} />
            </fieldset>
            <fieldset>
                <label htmlFor="phone_number">Phone Number</label>
                <input className="account_input" name="phone_number" placeholder="Phone Number" value={props.customer.phone_number} onChange={handleFieldChange} />
            </fieldset>
            <fieldset>
                <label htmlFor="address">Address</label>
                <input className="account_input" name="address" placeholder="Address" value={props.customer.address} onChange={handleFieldChange} />
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    )    
}

export default AccountForm;