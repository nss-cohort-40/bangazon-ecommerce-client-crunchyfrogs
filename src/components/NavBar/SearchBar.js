import React, { useRef } from "react"
import { withRouter } from "react-router-dom"

const SearchBar = props => {

    const search = useRef()

    const handleSearch = (e) => {
        e.preventDefault()

        const keywords = {
            "search": search.current.value
        }

    }
    return (
        <>
            {/* <input className="nav_search" label="Search"></input>
            <button>Search</button> */}
                    <input ref={search} type="text"
                        name="search"
                        className="nav_search"
                        placeholder="Search Products"
                        label="Search"
                        />
                        <button onClick={handleSearch}>Search</button>
        </>
    )
}

export default SearchBar;