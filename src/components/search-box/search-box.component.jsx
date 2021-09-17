import "./search-box.styles.css"

import React from 'react'

// const SearchBox = ({placeholder , handleChange}) =>(
//     <input
//         className='search'
//         type='search'
//         placeholder={placeholder}
//         onChange={handleChange}
//     />
// );


function Searchbox({placeholder , handleChange}) {
    return(
        <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
/>
    );
}

export default Searchbox

    
 
