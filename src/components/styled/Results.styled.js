import styled from "styled-components"

export const ResultsStyled = styled.section`
    min-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;

    .results-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }

    .results-chart {
        width: 100%;
        height: 200px;
        background-color: #f8fafc;
        margin: 20px 0%;

        .chart {
            width: 100%;
            height: 100%;
        }
    }

    .results-table {
        width: 100%;
        padding: 10px;

        .table-head, .table-row {
            padding: 5px 10px;
            width: 100%;
            display: grid;
            grid-template-columns: 2fr 3fr 3fr 1fr;
            align-items: center;

            .row-options {
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }
        }

        .table-head {
            font-weight: 700;
            margin-bottom: 10px;
        }

        .table-row {
            border-radius: 5px;
            background-color: #f1f5f9;
            margin-bottom: 10px;
            transition: 0.5s;
            font-weight: 500;
        }

        .table-row:hover {
            background-color: #e2e8f0;
            transition: 0.5s;
        }
    }
`