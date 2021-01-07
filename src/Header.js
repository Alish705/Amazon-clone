import React from 'react'
import "./Header.css";

function Header() {
    return (
        <div className="header">
        <img className="header__logo" 
        src ="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" 
        alt= "amazon logo"   
        />
        <div className="header__search">
            <input className="header__searchInput" type="text" />
            {/*Logo*/}
        </div> 

        <div className="header__nav">
            <div className="header__option">

            </div>
            <div className="header__option">
                
            </div>
            <div className="header__option">
                
            </div>
        </div>           
        </div>
    )
}

export default Header
