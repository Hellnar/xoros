import React from 'react'
import Categories from '../Categories'
import Header from '../Header'
import { HomeStyled } from '../styled/Home.styled'

export default function Home() {
    return (
        <HomeStyled id="home">
            <Header />
            <Categories />
        </HomeStyled>
    )
}
