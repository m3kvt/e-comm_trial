import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header>
        <div className="header-overlay">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Go Green</h2>
                        <p>description about the website .... theme</p>
                        <form className='btn'>
                            <input type="search" placeholder="Email"/>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header