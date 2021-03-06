import React, { useState, useEffect } from "react"
import module from "../../api/module"
import ProductCard from "../product/ProductCard"


const SearchResults = props => {
    const searchword = props.searchword

    const [results, setResults] = useState([])

    useEffect(()=>{
        let fetchData = async () => setResults(await module.searchRequest(searchword))
        fetchData()
        }, [searchword]
    )

    return <>
    <h1>Results</h1>
    <ul>
    { results.length !== 0 ?
        (results.map(product => <ProductCard product={product} {...props}/>))
        :
        <p>Nothing found.</p>
    }
    </ul>
    </>
}

export default SearchResults