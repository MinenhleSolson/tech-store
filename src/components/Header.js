import React from 'react'
import '../header.css'
import { Link } from 'react-router-dom';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { useStateValue } from './StateProvider'; 

function Header() {
  
  const [{cart}, dispatch] = useStateValue();

  return (
    <nav className="header">
      <Link className="headerLink" to="/">
      <h2 className="headerLogo"> Tech Store </h2>
      </Link>

      {/*search box */}
      <div className="headerSearch">
      <input type="text" className="SearchBox" />
      </div>

        <div className="headerNav">

        <Link to="/checkout" className="headerLink">
        <div className="shoppingCart">
          <ShoppingCartRoundedIcon />
  <span className="headerOption2 count" >{cart?.length}</span>
        </div>
        </Link>
    
      </div>

      </nav>
  )
}

export default Header
