import styled from "styled-components";

export const NewCategoryStyled = styled.div`
    .new-category {
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
        
        .new-category-box {
            width: 90vw;
            max-width: 500px;
            height: fit-content;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
    
            .new-category-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }
            
            .new-category-body {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
    
                .new-category-row {
                    width: 100%;
    
                    .new-category-name {
                        width: 100%;
                        margin: 10px 0;
                    }
                }
            }
        }
    }

    .new-category-hide {
        display: none;
    }

`