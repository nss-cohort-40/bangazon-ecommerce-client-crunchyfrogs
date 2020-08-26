import React, { useRef, useState } from "react"

const AddPayment = props => {
    const merchantName = useRef()
    const accountNumber = useRef()
    const expirationDate = useRef()
    const [ toggleModal, setToggleModal ] = useState(false)
    let [ paymentButton, setPaymentButton ] = useState("Add a payment type")


    const handleAddPayment = (evt) => {
        evt.preventDefault()

        const paymentType = {
            merchant_name: merchantName.current.value,
            account_number: accountNumber.current.value,
            expiration_date: expirationDate.current.value
        }


        fetch(`http://localhost:8000/paymenttype`, {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            },
            "body": JSON.stringify(paymentType)
        })
    }

    const handleModal = () => {
        if (toggleModal) {
            document.getElementById("add-payment-type-dialog").close()
            setPaymentButton("Add a payment type")
        } else {
            document.getElementById("add-payment-type-dialog").show()
            setPaymentButton("cancel")
        }
        setToggleModal(!toggleModal)
    }
   

    return (
        <>
            <button onClick={handleModal}>{paymentButton}</button>
            <dialog id="add-payment-type-dialog">
                <form onSubmit={handleAddPayment}>
                    <label for="merchant_name">Merchant</label>
                    <input id="merchant_name" ref={merchantName}></input>
                    <label for="account_number">Account Number</label>
                    <input id="account_number" ref={accountNumber}></input>
                    <label for="expiration_date">Expiration Date</label>
                    <input id="expiration_date" type="date" ref={expirationDate}></input>
                    <button type="submit" onClick={handleModal}>Add Payment Type</button>
                </form>
            </dialog>
        </>
    )
}

export default AddPayment