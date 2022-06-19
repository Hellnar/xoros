import styled from "styled-components"

export const ActivitiesStyled = styled.div`
    min-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    
    .activities-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #e2e8f0;

        .header-left {

            .back-btn {
                margin: 0 0 20px 0;
            }

            .total {
                display: flex;
                padding-top: 10px;
    
                .total-row {
                    display: flex;
                    width: fit-content;
                    margin-right: 15px;
    
                    p {
                        font-weight: 300;
                        color: #94a3b8;
                    }
    
                    p:first-child {
                        margin-right: 5px;
                    }
                }
            }
        }


    }

    .activities-list {
        width: 100%;
        padding: 10px;

        .activity {
            background-color: #f1f5f9;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
            transition: 0.5s;

            .activity-header {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .activity-title {
                    font-size: 22px;
                    font-weight: 700;
                }
            }

            .activity-total {
                display: flex;
                padding-top: 10px;
    
                .activity-total-row {
                    display: flex;
                    width: fit-content;
                    margin-right: 15px;
    
                    p {
                        font-weight: 400;
                        font-size: 14px;
                        color: #94a3b8;
                    }
    
                    p:first-child {
                        margin-right: 5px;
                    }
                }
            }
        }

        .activity:hover {
            cursor: pointer;
            background-color: #e2e8f0;
            transition: 0.5s;
        }

    }
`