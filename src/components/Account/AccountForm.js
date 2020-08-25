import React, { useState } from 'react';

const AccountForm = props => {
    const handleFieldChange = e => {
        const updatedInfo = [...props.customer]
        updatedInfo[e.target.name] = e.target.value
        props.setCustomer(updatedInfo)
    }

    const editAccount = e => {
        e.preventDefault()
        fetch(`http://localhost:8000/customer/${props.customer.id}`, {
            "method": "PUT",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            },
            "body": JSON.stringify({
                "customer": props.customer
            })
        })
            .then(props.history.push('/account'))
    }

    return (
        <form className="account_form" onSubmit={editAccount}>
            <fieldset>
                <label htmlFor="firstName">First Name</label>
                <input className="account_input" name="firstName" placeholder="First Name" onChange={handleFieldChange} />
            </fieldset>
            <fieldset>
                <label htmlFor="lastName">Last Name</label>
                <input className="account_input" name="lastName" placeholder="Last Name" />
            </fieldset>
            <fieldset>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input className="account_input" name="phoneNumber" placeholder="Phone Number" />
            </fieldset>
            <fieldset>
                <label htmlFor="address">Address</label>
                <input className="account_input" name="address" placeholder="Address" />
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    )    
}

export default AccountForm;