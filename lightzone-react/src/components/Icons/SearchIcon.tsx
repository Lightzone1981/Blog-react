import { useState } from 'react'
import { IIcon } from '../../types'

const SearchIcon = ({width='22', height='22', color='#313037', hoverColor }:IIcon) => {
    const [iconFill, setIconFill] = useState(color)

    return (
        <svg className="search-bar__show-button-icon" viewBox={`0 0 ${width} ${height}`}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8ZM8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C9.84871 16 11.551 15.3729 12.9056 14.3199L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L14.3199 12.9056C15.3729 11.551 16 9.84871 16 8C16 3.58172 12.4183 0 8 0Z" fill={`${color}`}/>

        </svg>
    )
}

export default SearchIcon