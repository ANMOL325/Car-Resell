import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='CompanyDetails'>
           <div className='CompanyLogo'>
                
                <span>Mumbai,MH</span>
           </div>
           <span className='ContactInfo'>9876543211 8am - 10pm</span>
       </div>
       <header className='HeaderMenu'>
           {/* <a href='/'>Home</a>
           <a href='/Login'>Login</a>
           <a href='/Registeration'>Registeration</a> */}

           <Link to={"/"}>Home</Link>
           <Link to={"/Login"}>Login</Link>
           <Link to={"/Registeration"}>Registeration</Link>
       </header>
    </div>
  )
}

export default Header