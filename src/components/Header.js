import React from 'react'
import { HeaderStyled } from './styled/Header.styled'
import { Link } from "react-router-dom"
import logo from '../logo.png'

export default function Header() {
    return (
        <HeaderStyled>
            <div id="header">
                <img src={logo} alt="Logo" />
                <p>Xoros</p>
            </div>
            <nav>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/stats"><li>Statistics</li></Link>
                    <Link to="/settings"><li>Settings</li></Link>
                </ul>
            </nav>
        </HeaderStyled>
    )
}
