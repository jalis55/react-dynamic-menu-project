import React from 'react'
import MenuList from './MenuList';

const MenuComponent = ({menus=[]}) => {
  return (
    <div>
     <MenuList list={menus}/>
    </div>
  )
}

export default MenuComponent;
