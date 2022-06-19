import React from 'react'
import Activities from '../Activities'
import Header from '../Header'
import { ActivitiesPageStyled } from '../styled/ActivitiesPage.styled'

export default function ActivitiesPage() {
    return (
        <ActivitiesPageStyled id="activities">
            <Header />
            <Activities />
        </ActivitiesPageStyled>
    )
}
