import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>



<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Product</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        
        <Link className='nav-link active' to={"/"}>Product Details</Link>
        
        
        <Link className='nav-link' to={'/search'}> Search Proudct</Link>
        <a className="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header