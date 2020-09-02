import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"

const SearchBar = props => {

    const [search, setSearch] = useState("")
    const refSearch = useRef()
    
    const handler = () => {
        setSearch(refSearch.current.value)
    }
    
    let link_to_search = `/product/${search}`

    return (
        <>
            <input onKeyUp={handler} ref={refSearch} type="text"
                name="search"
                className="nav_search"
                placeholder="Search Products"
                label="Search"
            />
            <Link to={link_to_search}><button>Search</button></Link>
        </>
    )
}

export default SearchBar;