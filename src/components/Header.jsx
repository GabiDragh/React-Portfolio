import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Gabriela Draghici</Link>
                <div className="d-flex flex-row justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projectGallery">Project Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
          </nav>
        </header>
    );
}

export default Header;