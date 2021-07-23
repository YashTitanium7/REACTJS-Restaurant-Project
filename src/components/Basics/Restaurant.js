import React, { useState } from 'react'
import './style.css'
import Menu from './menuAPI'
import MenuCard from './MenuCard'

const Restaurant = () => {
  const [MenuData, setMenuData] = useState(Menu)
  
  return (
    <>
      <MenuCard menuData={MenuData} />
    </>
  )
}

export default Restaurant;
