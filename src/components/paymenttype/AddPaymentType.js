import React, { useRef } from "react"


const AddPayment = props => {
    const merchantName = useRef()
    const accountNumber = useRef()
    const expirationDate = useRef()


    const handleAddPayment = (evt) => {
        evt.preventDefault()

        const paymentType = {
            merchant_name: merchantName.current.value,
            account_number: accountNumber.current.value,
            expiration_date: expirationDate.current.value
        }

        console.log(paymentType)
        fetch(`http://localhost:8000/payment_type`, {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            },
            "body": JSON.stringify(paymentType)
        })
    }

    return (
        <>
            <h1>Add a payment type</h1>
            <form onSubmit={handleAddPayment}>
                <input id="merchant_name" ref={merchantName}></input>
                <label for="merchant_name">Merchant</label>
                <input id="account_number" ref={accountNumber}></input>
                <label for="account_number">Account Number</label>
                <input id="expiration_date" type="date" ref={expirationDate}></input>
                <label for="expiration_date">Expiration Date</label>
                <button type="submit">Add Payment Type</button>
            </form>
        </>
    )
}


export default AddPayment