import React, { useState, useEffect } from "react"
import searchRequest from "../../api/module"
import ProductBox from "../Products/ProductBox"


const SearchResults = props => {
    const searchword = props.searchword

    const [results, setResults] = useState([])

    useEffect(
        async ()=>{
            setResults(await searchRequest(searchword))
        }, []
    )

    return <>
    <h1>Results</h1>
    <ul>
    { results.length == 0 ?
        (results.map(product => <ProductBox product={product} {...props}/>))
        :
        <p>Nothing found.</p>
    }
    </ul>
    </>
}

export default SearchResults