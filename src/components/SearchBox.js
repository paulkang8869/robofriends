import React, { Fragment } from 'react'

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='tc pa2'>
            <input
                type="search"
                placeholder="Search Robofriend"
                className="pa2 ba b--green bg-lightest-blue"
                onChange={searchChange}
            />

        </div>
    )
}

export default SearchBox