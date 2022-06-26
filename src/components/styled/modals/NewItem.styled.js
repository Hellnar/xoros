import styled from "styled-components";

export const NewItemStyled = styled.div`
    .new-item {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translate(-50% -50%);
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        left: 0;
        
        .new-item-box {
            width: 90vw;
            max-width: 500px;
            height: fit-content;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
    
            .new-item-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            
            .new-item-body {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
    
                .new-item-row {
                    width: 100%;
    
                    input {
                        width: 100%;
                        margin: 10px 0;
                    }
                }

                .row-skip {
                    display: flex;
                    align-items: center;

                    label {
                        width: fit-content;
                        margin-right: 10px;
                    }

                    input {
                        width: fit-content
                    }
                }
            }
        }
    }

    .new-item-hide {
        display: none;
    }

`