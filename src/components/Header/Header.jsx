import React, {component} from 'react';
import Style from './Header.module.css'
const Header = () => {
    return <header className={Style.header}>
       <img src='https://img.freepik.com/premium-photo/creative-isolated-professional-company-product-logo-icon-3d-illustrated_768106-4555.jpg?w=740' alt='logo'>
       </img>
    </header>;
}

export default Header