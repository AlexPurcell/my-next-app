import React from 'react'
import '/styles/Navbar.module.scss';

const css = `
    body {
        background-color: #fff;
    }
`

export const Navbar = () => {
    return(
        <>
    <style type="text/css">{css}</style>
        <header>
            <nav>
                <ul className='nav__links'>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </nav>
            <a href="#"><button>Contact</button></a>
        </header>

        </>
    )
}

export default Navbar