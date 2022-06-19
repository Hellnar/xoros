import React from 'react'
import Results from '../Results'
import { ResultPageStyled } from '../styled/ResultPage.styled'
import Header from '../Header'

export default function ResultsPage() {
    return (
        <ResultPageStyled>
            <Header />
            <Results />
        </ResultPageStyled>
    )
}
