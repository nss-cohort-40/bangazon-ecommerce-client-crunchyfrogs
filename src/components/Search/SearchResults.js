import React, { useState, useEffect } from "react"
import searchRequest from "../../api/module"
import ProductBox from "../Products/ProductsBox"


const SearchResults = props => {
    const searchword = props.searchword

    const {results, setResults} = useState({})

    useEffect(
        ()=>{
            setResults = searchRequest(searchword)
        }
    )

    return <>
    <t1>Results</t1>
        <ul>
            { results.map(product => <ProductBox product={product} {...props}/>) }
        </ul>
    </>
}

export default SearchResults