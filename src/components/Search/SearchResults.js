import React, { useState, useEffect } from "react"
import searchRequest from "../../api/module"
import ProductBox from "../Products/ProductBox"


const SearchResults = props => {
    const searchword = props.searchword

    const {results, setResults} = useState({})

    useEffect(
        async ()=>{
            setResults = await searchRequest(searchword)
            console.log("triggered")
        }, []
    )

    return <>
    <h1>Results</h1>
    <ul>
        {results.map((product) => <ProductBox product={product} {...props}/>) }
    </ul>
    </>
}

export default SearchResults