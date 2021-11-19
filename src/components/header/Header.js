import React from 'react';
import './header.css';

// Icons
import AppsIcon from '@material-ui/icons/Apps';

const Header = () => {
    return (
        <div className="header">
            <ul className="header__ul">
                <li><a href="#home"><AppsIcon /></a></li>
                <li>Portfolio</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Header;
