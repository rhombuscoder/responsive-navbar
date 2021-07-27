import React, { useState } from 'react'
import MenuIcon from './assets/bars-solid.svg'
import CloseIcon from './assets/window-close-regular.svg'

export default function ResponsiveNavbar() {

    //We will use react hooks for toggling the menu
    const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

    const showSideMenu = () => {
        (isSideMenuOpen) ? setisSideMenuOpen(false) : setisSideMenuOpen(true)
    }

    return (
        <div className="fixed w-full h-8 bg-blue-400 text-gray-200 flex flex-row justify-between items-center">
            <div className="brand-logo text-sm font-bold px-2">rhombus</div>
            <ul className="hidden menu-list lg:flex lg:flex-row text-xs font-bold">
                <li className="menu-list-item px-2"><a href="#">Home</a></li>
                <li className="menu-list-item px-2"><a href="#">Profile</a></li>
                <li className="menu-list-item px-2"><a href="#">Settings</a></li>
            </ul>
            
            <button onClick={()=>{showSideMenu()}} className="lg:hidden menu-button">
                {(isSideMenuOpen) ? <img src={CloseIcon} className="w-8 h-8 px-2" alt="close"></img> : <img src={MenuIcon} className="w-8 h-8 px-2" alt="menu"></img>}
            </button>
            {(isSideMenuOpen) ? SideMenu() : ''}
        </div>
    )

   
}

function SideMenu(){
    return(
        <div className="fixed h-screen w-1/2 sm:w-1/4 lg:hidden bg-blue-500 top-8">
            <ul className="menu-list flex flex-col text-xs font-bold">
                <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Home</a></li>
                <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Profile</a></li>
                <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700"><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}