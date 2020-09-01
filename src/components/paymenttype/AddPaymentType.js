import React, { useRef, useState } from "react"
import "./AddPaymentType.css"

const AddPayment = props => {
    const merchantName = useRef()
    const accountNumber = useRef()
    const expirationMonth = useRef()
    const expirationYear = useRef()
    const [ toggleModal, setToggleModal ] = useState(false)
    let [ paymentButton, setPaymentButton ] = useState("Add a payment type")

    const handleAddPayment = (evt) => {
        evt.preventDefault()

        //Checks for month and year slots actually selected
        if(expirationMonth.current.value === "MM" || expirationYear.current.value === "YY"){
            window.alert("Please enter an expiration date for your payment type.")
            return
        }

        //Formats the month (and year if needed) to be +1 to accurately reflect how payment expiration works, then formats.
        let expMonth = (parseInt(expirationMonth.current.value) + 1)
        let expYear = parseInt(expirationYear.current.value)
        if(expMonth === 13){
            expMonth = 1
            expYear += 1
        }
        if(expMonth <= 9){
            expMonth = "0" + expMonth.toString()
        }
        else{
            expMonth = expMonth.toString()
        }
        expYear = expYear.toString()
        
        //formats the selected MM and YY for 
        const expirationDate = expYear + "-" + expMonth + "-01" 
        const date_today = Date.now()
        const exp_date = Date.parse(expirationDate)

        if(date_today >= exp_date){
            window.alert("The card you are trying to add has already expired. Please use a valid payment method.")
            return
        }
        else{
        const paymentType = {
            merchant_name: merchantName.current.value,
            account_number: accountNumber.current.value,
            expiration_date: expirationDate
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
        .then(() => {props.getPayments()
            document.getElementById("add-payment-form").reset()
            handleModal()
        })
    }
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
                <form id="add-payment-form" onSubmit={handleAddPayment}>
                    <label for="merchant_name">Merchant: </label>
                    <input id="merchant_name" ref={merchantName} ></input>
                    <label for="account_number">Account Number: </label>
                    <input id="account_number" ref={accountNumber} ></input>
                    <div id="exp-date-selector">
                        <label for="expiration_month">Expiration Date: </label>
                        <select id="expiration_month" ref={expirationMonth}>
                            <option value={null}>MM</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <label for="expiration_year">/</label>
                        <select id="expiration_year" ref={expirationYear}>
                            <option value={null}>YY</option>
                            <option value="2020">20</option>
                            <option value="2021">21</option>
                            <option value="2022">22</option>
                            <option value="2023">23</option>
                            <option value="2024">24</option>
                            <option value="2025">25</option>
                            <option value="2026">26</option>
                            <option value="2027">27</option>
                            <option value="2028">28</option>
                            <option value="2029">29</option>
                        </select>
                    </div>
                    <button type="submit">Add Payment Type</button>
                </form>
            </dialog>
        </>
    )
}

export default AddPayment