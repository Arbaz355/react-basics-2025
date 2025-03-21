import React from 'react'
import HeaderLeft from "./Header.left"

const Header = (props) => {
    const { count } = props;
    return (
        <div>
            <HeaderLeft />
        </div>
    )
}

export default Header