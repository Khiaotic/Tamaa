////use location by react router dom
import { useLoaderData, useLocation } from 'react-router-dom'
import Button from './Button'
import './Header.css'
import {navigation} from '../constants'
import MenuSvg from '../assets/svg/MenuSvg'
import {HamburgerMenu} from './design/Header'
import { useState } from 'react'

const Header = () => {
  const pathname =useLocation()
  const [openNavigation, setOpenNavigation]=useState(false)
  const toggleNavigation = () => {
    if(openNavigation) {
      setOpenNavigation(false)
    }
    else {
      setOpenNavigation(true)
    }
  }

  const handleClick = () => {
    setOpenNavigation(false)
  }


  return (
    <div className={`fixed top-0 left-0 w-full z-50 bg-n-8/90 border-none backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
     <div className=" flex items center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
     <a href="#hero" className="flex items-center width={190} xl:mr-8 ">
     <svg
        className="w-10 h-10 logo "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 219.2 161.1"
      >
     <path class="cls-3" d="M95.1,23.3c.9.5,1.3,1.7.7,2.7-7,11.6-22.8,18.9-33.6,19s-30.2-7.9-33.8-26.3c-.9-7-3.4-8.8,27.3-6.1,5.1.5,11.5,1.3,16.1,2.3,9.6,2.2,16.1,4.5,23.3,8.4Z"/>
  <path class="cls-1" d="M36,10.7s-9.9-.8-17.6,3.3c-5.2,2.7,2.4,1.5,4.1,1.4s2.1.1,3.6.8-1.3.9-2.7,1.3-3.3,2-2.7,2.8,4.6-.9,6.3-.5,1.6,2,1.8.8-.8-6.5-.1-7.4,1.6-1.1,2.2-1.4,5.2-1.1,5.2-1.1Z"/>
  <path class="cls-1" d="M27,10s6-.4,2.1-6.1,3.6.6,4.6,1.5,1.8,1.4,3,2,.6-1.2-.5-2.3-3.5-3.6-2.7-3.6,5.1,2.7,6.5,3.8,6,5.3,5.4,6-9-1.6-9.3-.8-3.1,0-3.1.7-6-1.2-6-1.2Z"/>
  <path class="cls-1" d="M31.5,28.8c0,0-4.2-.5-5.8.1s-2.1,1.2-2.2,1.9-.1,2.5,1.1,1.6,1.7-1.3,2.2-.9,1.4.6,1.9.4.7-.8,1.2-.9,1.2-.2,1.4,0,.5.9-.3,1-1.2,0-1.8.7-1.3,1.2-2,1.3c-1.2.1-3.5-.6-2,1.4s5.1-.3,5.9-.6,1.2-.5,1.1-.1-.8.8-1.3,1.5-.7,1.8-.7,2.8.5,1.9,1.4,1.9,1.1-.3,1.2-1-.5-1.9.7-2.6,1.4,0,2.1-.5,1.4-.7,1.1-1.5-5.1-6.4-5.1-6.4Z"/>
  <path class="cls-1" d="M63.4,14.3c-5.7-.7-13.9-1.3-15.9-1.4-2.4,2.7-3.2,5.5-3.2,9.4,0,8.6,7,15.5,15.5,15.5s15.5-7,15.5-15.5,0-3.7-1.2-6c-1.9-.5-6.4-1.5-10.8-2Z"/>
  <circle class="cls-2" cx="73.7" cy="26.4" r="5"/>
  <path class="cls-1" d="M43.6,10.5S24.9,5.9,21.1,1.5c-3.9-4.5-.6,3.1.7,5s3.5,4.5,5.9,5,16-.9,16-.9Z"/>
  <path class="cls-3" d="M125.2,23.3c-.9.5-1.3,1.7-.7,2.7,7,11.6,22.8,18.9,33.6,19s30.2-7.9,33.8-26.3c.9-7,3.4-8.8-27.3-6.1-5.1.5-11.5,1.3-16.1,2.3-9.6,2.2-16.1,4.5-23.3,8.4Z"/>
  <path class="cls-1" d="M184.3,10.7s9.9-.8,17.6,3.3-2.4,1.5-4.1,1.4-2.1.1-3.6.8,1.3.9,2.7,1.3,3.3,2,2.7,2.8-4.6-.9-6.3-.5-1.6,2-1.8.8.8-6.5.1-7.4-1.6-1.1-2.2-1.4-5.2-1.1-5.2-1.1Z"/>
  <path class="cls-1" d="M193.3,10s-6-.4-2.1-6.1-3.6.6-4.6,1.5-1.8,1.4-3,2-.6-1.2.5-2.3,3.5-3.6,2.7-3.6-5.1,2.7-6.5,3.8-6,5.3-5.4,6,9-1.6,9.3-.8,3.1,0,3.1.7,6-1.2,6-1.2Z"/>
  <path class="cls-1" d="M188.8,28.8c0,0,4.2-.5,5.8.1s2.1,1.2,2.2,1.9.1,2.5-1.1,1.6-1.7-1.3-2.2-.9-1.4.6-1.9.4-.7-.8-1.2-.9-1.2-.2-1.4,0-.5.9.3,1,1.2,0,1.8.7,1.3,1.2,2,1.3c1.2.1,3.5-.6,2,1.4s-5.1-.3-5.9-.6-1.2-.5-1.1-.1.8.8,1.3,1.5.7,1.8.7,2.8-.5,1.9-1.4,1.9-1.1-.3-1.2-1,.5-1.9-.7-2.6-1.4,0-2.1-.5-1.4-.7-1.1-1.5,5.1-6.4,5.1-6.4Z"/>
  <path class="cls-1" d="M156.9,14.3c5.7-.7,13.9-1.3,15.9-1.4,2.4,2.7,3.2,5.5,3.2,9.4,0,8.6-7,15.5-15.5,15.5s-15.5-7-15.5-15.5c0-2.7,0-3.7,1.2-6,1.9-.5,6.4-1.5,10.8-2Z"/>
  <path class="cls-1" d="M176.7,10.5s18.7-4.6,22.6-9c3.9-4.5.6,3.1-.7,5s-3.5,4.5-5.9,5-16-.9-16-.9Z"/>
  <path class="cls-1" d="M48.9,50.7s.5-1.4-.7-1.5c-2.9-.2-7.9-1.1-11-4.2-1.1-1.1-2.8-2.2-2.9,1.8s-1.8,13.4-3.6,13.1c-13.1-2.4-20.4,9.1-25.2,21.2C.8,93.1-.4,111.2.7,124.4c.9,11.3,5,28,12.8,35.5,1,.9-.7-6-2.7-14.7-.3-1.2-1.8-12.7-1.8-13.6,0-4.5,0-11.1.6-17.8,1.2-12.8,3.6-19.5,8.1-27.5,6.2-11,8.4-12.3,14.3-13.2,5.5-.8,9,4.6,11-1.8,2-6.4,5.9-20.7,5.9-20.7Z"/>
  <path class="cls-1" d="M170.4,51.7s-.5-1.4.7-1.5c2.9-.2,7.9-1.1,11-4.2s2.8-2.2,2.9,1.8c0,1.5,1.8,13.4,3.6,13.1,13.1-2.4,20.4,9.1,25.2,21.2,4.8,12.1,6,30.2,4.9,43.4-.9,11.3-5,28-12.8,35.5-1,.9.7-6,2.7-14.7.3-1.2,1.8-12.7,1.8-13.6,0-4.5,0-11.1-.6-17.8-1.2-12.8-3.6-19.5-8.1-27.5-6.2-11-8.4-12.3-14.3-13.2s-9,4.6-11-1.8c-2-6.4-5.9-20.7-5.9-20.7Z"/>
  <circle class="cls-2" cx="145.2" cy="26.4" r="5"/>
</svg>
<h1 className="pl-2 text-3xl text-[#548fda] font-bold ">TAMA</h1>
     </a>
     <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] right-0 bottom-0 left 0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
      <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'> 
       {navigation.map((item) => (
      <a key={item.id} href={item.url} onClick={handleClick} className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg: leading-5 lg:hover:text-n-1 xl:px-12`}>

        {item.title}
      </a>
      ))}
      </div>
      <HamburgerMenu/>
     </nav>
     <Button className="ml-auto lg:hidden px-3" onClick={toggleNavigation}>
      <MenuSvg openNavigation={openNavigation} />
     </Button>
     </div>
    </div>
  )
}

export default Header


/// may 5 or spring10