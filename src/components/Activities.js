import React, { useState } from 'react'
import { ActivitiesStyled } from './styled/Activities.styled'
import { useQuery } from "react-query"
import { getItems, getActivities } from '../api/userAPI';
import { Link } from "react-router-dom"
import NewActivity from './modals/NewActivity';
import { deteleActivity } from '../api/activitiesAPI'

export default function Activities() {
    const [newActivityModal, setNewActivityModal] = useState("new-activity-hide")
    const activitiesQuery = useQuery('activities', async () => await getActivities())
    const itemsQuery = useQuery('items', async () => await  getItems())
    const params = new URLSearchParams(window.location.search)
    const currentCategory = params.get("category")

    function countActivities(activities, category) {
        const result = activities.filter(activity => activity.category === category.categoryID)
        return result.length
    }
    
    function countItems(items, activity) {
        const result = items.filter(item => item.activityID === activity.activityID)
        return result.length
    }

    function filterActivties() {
        return activitiesQuery.data.filter(activity => {
            return parseInt(activity.category) === parseInt(currentCategory)
        })
    }

    function removeActivity(e, id) {
        e.preventDefault()
        deteleActivity(id)
        refetchActivities()
    }

    function refetchActivities() {
        console.log(`REFETCHIIIING`)
        activitiesQuery.refetch()
    }

    if(itemsQuery.status === "loading" || activitiesQuery === "loading") return <p>Loading</p>
    if(itemsQuery.status === "error" || activitiesQuery === "error") return <p>ALARM, ERROR FETCHING DATA</p>

    return (
        <ActivitiesStyled id="activities-content">
            <div className="activities-header">
                <div className="header-left">
                    <Link to="/"><button className="back-btn">Back</button></Link>
                    <h2>Activities</h2>
                    <div className="total">
                        <div className="total-row">
                            <p>Activities:</p>
                            <p>2</p>
                        </div>
                        <div className="total-row">
                            <p>Items:</p>
                            <p>2</p>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <button id="add-activity" onClick={() => setNewActivityModal("new-activity")}>Add activity</button>
                </div>
            </div>
            <div className="activities-list">
                {activitiesQuery.data !== undefined && filterActivties().map(activity => {
                    return (
                        <Link key={activity.id} to={`/results/?category=${currentCategory}&activity=${activity.activityID}`}>
                            <div className="activity">
                                <div className="activity-header">
                                    <p className="activity-title">{activity.name}</p>
                                    <button onClick={(e) => removeActivity(e, activity.id)}>X</button>
                                </div>
                                <div className="activity-total">
                                    <div className="activity-total-row">
                                        <p>Items:</p>
                                        <p>{countItems(itemsQuery.data, activity)}</p>
                                    </div>
                                    <div className="activity-total-row">
                                        <p>Last update:</p>
                                        <p>12.04.2023 11:24</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

            <NewActivity newActivityModal={newActivityModal} setNewActivityModal={setNewActivityModal} refetchActivities={refetchActivities} currentCategory={currentCategory}/>
        </ActivitiesStyled>
    )
}
