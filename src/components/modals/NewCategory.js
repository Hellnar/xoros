import React, { useState } from 'react'
import { NewCategoryStyled } from '../styled/modals/NewCategory.styled'
import { addCategory } from '../../api/categoriesAPI'

export default function NewCategory({newCategoryModal, setNewCategoryModal, refetchCategories}) {
    const [newCategory, setNewCategory] = useState("")

    async function addNewCategory() {
        await addCategory(newCategory)
        refetchCategories()
        setNewCategoryModal("new-category-hide")
        setNewCategory("")
    }

    return (
        <NewCategoryStyled>
            <div className={newCategoryModal}>
                <div className="new-category-box">
                    <div className="new-category-header">
                        <h2>Add category</h2>
                        <button onClick={() => setNewCategoryModal("new-category-hide")}>X</button>
                    </div>
                    <div className="new-category-body">
                        <div className="new-category-row">
                            <input className="new-category-name" type="text" value={newCategory} onChange={(input) => setNewCategory(input.target.value)}/>
                        </div>
                        <button onClick={addNewCategory}>Add</button>
                    </div>
                </div>
            </div>
        </NewCategoryStyled>        
    )
}
