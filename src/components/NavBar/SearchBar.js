import React, { useRef } from "react"
import { Link } from "react-router-dom"

const SearchBar = props => {

    const search = useRef()

    return (
        <>
            <input ref={search} type="text"
                name="search"
                className="nav_search"
                placeholder="Search Products"
                label="Search"
            />
            <Link to={`/product?search=${search.current.value}`}><button>Search</button></Link>
        </>
    )
}

export default SearchBar;