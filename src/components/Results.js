import React, { useState, useEffect } from 'react'
import { ResultsStyled } from './styled/Results.styled'
import { useQuery } from "react-query"
import { getItems, getActivities } from '../api/userAPI';
import { DateTime } from "luxon";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom"

export default function Results() {
    const activitiesQuery = useQuery('activities', async () => await getActivities())
    const itemsQuery = useQuery('items', async () => await  getItems())
    const params = new URLSearchParams(window.location.search)
    const currentCategory = params.get("category")
    const currentActivity = params.get("activity")

    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: "basic-bar",
                height: 400,
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#a5b4fc'],
            xaxis: {
                categories: []
            }
        },
        series: [
            {
                name: "series-1",
                data: []
            }
        ]    
    })

    useEffect(() => {
        if(itemsQuery.status === "success") {
            getChartData()
        }
    }, [itemsQuery.status])

    function findActivity() {
        return activitiesQuery.data.find((activityItem) => {
            return parseInt(activityItem.activityID) === parseInt(currentActivity)
        })
    }
    
    function findItems() {
        return itemsQuery.data.filter(item => {
            return parseInt(item.activityID) === parseInt(currentActivity)
        })
    }

    function getChartData() {
        let xaxisCategories = []
        let seriesData = []
        itemsQuery.data.forEach(item => {
            if(parseInt(item.activityID) === parseInt(currentActivity)) {
                xaxisCategories.push(DateTime.fromMillis(item.date).toFormat("dd.MM.yyyy"))
                seriesData.push(item.value)
            }
        })
        setChartData({
            options: {
                chart: {
                    id: "basic-bar",
                    height: 400,
                    toolbar: {
                        show: false,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#a5b4fc'],
                xaxis: {
                    categories: xaxisCategories
                }
            },
            series: [
                {
                    name: "series-1",
                    data: seriesData
                }
            ]    
        })
    }

    if(itemsQuery.status === "loading" || activitiesQuery.status === "loading") return <p>Loading</p>
    if(itemsQuery.status === "error" || activitiesQuery.status === "error") return <p>ALARM, ERROR FETCHING DATA</p>


    return (
        <ResultsStyled>
            <div className="results-header">
                <Link to={`/activities?category=${currentCategory}`}><button className="back-btn">Back</button></Link>
                <h2>{findActivity().name}</h2>
                <button onClick={getChartData}>Add result</button>
            </div>
            <div className="results-chart">
                <Chart
                className="chart"
                options={chartData.options}
                series={chartData.series}
                type="area"
                height="100%"
                width="100%"
                />
            </div>
            <div className="results-table">
                <div className="table-head">
                    <p>Date</p>
                    <p className="row-result">Result</p>
                    <p>Comment</p>
                    <p className="row-options"></p>
                </div>
                {itemsQuery.data !== undefined && findItems().map((result) => {
                        return (
                            <div key={result.id} className="table-row">
                                <p className="row-date">{DateTime.fromMillis(result.date).toFormat("dd.MM.yyyy")}</p>
                                <p className="row-result">{result.value}</p>
                                <p>{result.comment}</p>
                                <p className="row-options">X</p>
                            </div>
                        )
                    })
                }
            </div>
        </ResultsStyled>
    )
}