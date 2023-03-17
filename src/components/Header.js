import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';

const Header = () => {
  return (
    <div className='header'>
        <img
        className='header__icon'
        src='https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo-768x432.png'
        alt=''
        />
        <div className='header__center'>
            <input type="text" />
            <SearchIcon />
        </div>

        <div className='header__right'>
            <p>Become a host</p>
        </div>
    </div>
  )
}

export default Header
