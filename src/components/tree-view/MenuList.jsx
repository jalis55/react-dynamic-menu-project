import React from 'react';
import MenuItems from './MenuItems';

const MenuList = ({list=[]}) => {
    // console.log(menuList)
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItems item={listItem} />)
        : null}
    </ul>
  )
}

export default MenuList;
