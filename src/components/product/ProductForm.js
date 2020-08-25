import React, { useEffect, useState, useRef } from 'react'
import Api from '../../api/module'

const ProductForm = (props) => {
    const title = useRef()
    const price = useRef()
    const description = useRef()
    const quantity = useRef()
    const location = useRef()
    const imagePath = useRef()
    const [productTypeId, setProductTypeId] = useState({ product_type_id: "" })
    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        Api.getProductTypes().then(productTypes => {
            setProductTypes(productTypes)
        })
    }

    const handleTypeChange = (event) => {
        const stateToChange = { ...productTypeId }
        stateToChange[event.target.id] = event.target.value
        const productType = productTypes.filter(productType => productType.name === stateToChange[event.target.id])
        stateToChange.product_type_id = productType[0].id
        setProductTypeId(stateToChange)
    }

    const onSubmitHandler = () => {
        const product = {
            title: title,
            price: price,
            description: description,
            quantity: quantity,
            location: location,
            imagePath: imagePath,
            product_type_id: productTypeId.product_type_id
        }
        Api.postNewProduct(product).then(e => {
            props.history.push("/")
        })

    }

    useEffect(getProductTypes, [])

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login">
                <h1 className="h3 mb-3 font-weight-normal">Sell a Product!</h1>
                <fieldset>
                    <label htmlFor="title"> title </label>
                    <input ref={title} type="text"
                        name="title"
                        className="form-control"
                        placeholder="title"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="price"> Price </label>
                    <input ref={price} type="number"
                        name="price"
                        className="form-control"
                        placeholder="price"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="description"> Description </label>
                    <input ref={description} type="text"
                        name="description"
                        className="form-control"
                        placeholder="description"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="quantity"> Quantity </label>
                    <input ref={quantity} type="number"
                        name="quantity"
                        className="form-control"
                        placeholder="quantity"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="location"> Location </label>
                    <input ref={location} type="text"
                        name="location"
                        className="form-control"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="imagePath"> Image path </label>
                    <input ref={imagePath} type="text"
                        name="imagePath"
                        className="form-control"
                        placeholder="imagePath"
                    />
                </fieldset>
                <fieldset>
                    <select onChange={handleTypeChange} id="productTypeId">
                        <option>Select Product Type</option>
                        {productTypes.map(productType => <option key={productType.id}>{productType.name}</option>)}
                    </select>
                </fieldset>
                <fieldset>
                    <button onClick={onSubmitHandler}>
                        Create Sell Offer
                    </button>
                </fieldset>
            </form>
        </main>
    )
}

export default ProductForm