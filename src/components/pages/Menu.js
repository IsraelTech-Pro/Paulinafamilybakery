
import React from 'react';
import { Link } from 'react-router-dom'; 
import { MenuList } from '../../helpers/MenuList';
import MenuItem from '../MenuItem';
import '../../styles/Menu.css';

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div>
        <div className='menuList'>
          {MenuList.map((menuItem, key) => (
            <Link to={`/order/${menuItem.id}`} key={key}>
              <MenuItem
                image={menuItem.Image}
                name={menuItem.name}
                price={menuItem.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;








/*import React from 'react';
import {MenuList} from '../../helpers/MenuList';
import MenuItem from '../MenuItem';
import '../../styles/Menu.css'
function Menu() {
  return (
    <div  className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div>
        <div className='menuList'>
            {MenuList.map((menuItem,key) => {
            return( <MenuItem
            key = {key}
             image={menuItem.Image} 
             name={menuItem.name} 
             price= {menuItem.price}/>
        );})}</div>
      </div>
    </div>
  )
}

export default Menu;
*/