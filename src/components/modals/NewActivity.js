import React, { useState } from 'react'
import { NewActivityStyled } from '../styled/modals/NewActivity.styled'
import { addActivity } from '../../api/activitiesAPI'

export default function NewActivity({newActivityModal, setNewActivityModal, refetchActivities, currentCategory}) {
    const [newActivity, setNewActivity] = useState("")

    async function addNewActivity() {
        await addActivity(newActivity, currentCategory)
        refetchActivities()
        setNewActivityModal("new-activity-hide")
        setNewActivity("")
    }

    return (
        <NewActivityStyled>
            <div className={newActivityModal}>
                <div className="new-activity-box">
                    <div className="new-activity-header">
                        <h2>Add activity</h2>
                        <button onClick={() => setNewActivityModal("new-activity-hide")}>X</button>
                    </div>
                    <div className="new-activity-body">
                        <div className="new-activity-row">
                            <input className="new-activity-name" type="text" value={newActivity} onChange={(input) => setNewActivity(input.target.value)}/>
                        </div>
                        <button onClick={addNewActivity}>Add</button>
                    </div>
                </div>
            </div>
        </NewActivityStyled>        
    )
}
