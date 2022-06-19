import styled from "styled-components"

export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    #header {
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        img {
            height: 36px;
            margin-right: 10px;
        }

        p {
            line-height: 1;
        }
    }

    nav {
        min-width: 800px;
        padding: 5px;
        border-radius: 5px;
        background-color: #fff;
        ul {
            display: flex;
            justify-content: flex-start;

            li {
                font-size: 18px;
                font-weight: 500;
                padding: 5px 5px;
                margin-right: 10px;
            }

            li:hover {
                cursor: pointer;
                color: #818cf8;
            }
        }
    }
`