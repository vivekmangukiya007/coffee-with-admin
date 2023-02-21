import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="https://coffeeaffection.com/wp-content/uploads/elementor/thumbs/Coffee-Affection-primary-logo-p8bq4id59gotp1vm7anm2tyicszbbbc2gr4nzgd4ty.png"  />
                    </a>
                    <div className="socials">
                        <a href="#"><i class="fa-brands fa-facebook-f" /></a>
                        <a href="#"><i class="fa-brands fa-twitter" /></a>
                        <a href="#"><i class="fa-brands fa-pinterest-p" /></a>
                        <a href="#"><i class="fa-brands fa-instagram" /></a>
                        <a href="#"><i class="fa-brands fa-youtube" /></a>
                    </div>
                </div>
            </nav>
            <nav className="navbar custom-navbar navbar-expand-md navbar-light bg-dark sticky-top">
                <div className="container">
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">                                
                                <Link to='/' className="nav-link text-white font-weight-bold" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white font-weight-bold" >About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white font-weight-bold" >Blogs</a>
                            </li>
                        </ul>
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a  className="ml-4 btn btn-success mt-1 btn-sm">Contact Us</a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Header
