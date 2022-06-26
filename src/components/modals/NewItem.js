import React, { useState } from 'react'
import { NewItemStyled } from '../styled/modals/NewItem.styled'
import { addItem } from '../../api/itemsAPI'

export default function NewItem({newItemModal, setNewItemModal, refetchItems, currentActivity}) {
    const [activityID, setActivityID] = useState(currentActivity)
    const [itemDate, setItemDate] = useState("")
    const [itemComment, setItemComment] = useState("")
    const [itemValue, setItemValue] = useState("")
    const [itemSkip, setItemSkip] = useState(false)

    async function addNewItem() {
        await addItem(activityID, itemDate, itemSkip, itemComment, itemValue)
        refetchItems()
        setNewItemModal("new-item-hide")
        setActivityID("")
        setItemDate("")
        setItemComment("")
        setItemValue("")
        setItemSkip(false)
    }

    return (
        <NewItemStyled>
            <div className={newItemModal}>
                <div className="new-item-box">
                    <div className="new-item-header">
                        <h2>Add item</h2>
                        <button onClick={() => setNewItemModal("new-item-hide")}>X</button>
                    </div>
                    <div className="new-item-body">
                        <div className="new-item-row">
                            <input className="new-item-date" type="date" value={itemDate} onChange={(input) => setItemDate(input.target.value)}/>
                        </div>
                        <div className="new-item-row">
                            <input className="new-item-value" type="text" placeholder="Set value" value={itemValue} onChange={(input) => setItemValue(input.target.value)}/>
                        </div>
                        <div className="new-item-row">
                            <input className="new-item-comment" type="text" placeholder="Add your comment" value={itemComment} onChange={(input) => setItemComment(input.target.value)}/>
                        </div>
                        <div className="new-item-row row-skip">
                            <label htmlFor="item-skip">Skip in chart</label>
                            <input className="new-item-skip" id="item-skip" type="checkbox" value={itemSkip} onChange={(input) => setItemSkip(input.target.value)}/>
                        </div>
                        <button onClick={addNewItem}>Add</button>
                    </div>
                </div>
            </div>
        </NewItemStyled>        
    )
}
