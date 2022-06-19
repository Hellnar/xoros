import React, { useState } from 'react'
import { CategoriesStyled } from './styled/Categories.styled'
import { useQuery } from "react-query"
import { getCategories, getActivities } from '../api/userAPI';
import { Link } from "react-router-dom"
import NewCategory from './modals/NewCategory';
import { deteleCategory } from '../api/categoriesAPI'

export default function Categories() {
    const [newCategoryModal, setNewCategoryModal] = useState("new-category-hide")
    const categoriesQuery = useQuery('categories', async () => await  getCategories())
    const activitiesQuery = useQuery('users', async () => await getActivities())

    function countActivities(activities, category) {
        const result = activities.filter(activity => activity.category === category.categoryID)
        return result.length
    }

    function removeCategory(e, id) {
        e.preventDefault()
        deteleCategory(id)
        refetchCategories()
    }

    function refetchCategories() {
        console.log(`REFETCHIIIING`)
        categoriesQuery.refetch()
    }

    if(categoriesQuery.status === "loading" || activitiesQuery === "loading") return <p>Loading</p>
    if(categoriesQuery.status === "error" || activitiesQuery === "error") return <p>ALARM, ERROR FETCHING DATA</p>

    return (
        <CategoriesStyled id="categories">
            <div className="categories-header">
                <div className="header-left">
                    <h2>Categories</h2>
                    <div className="total">
                        <div className="total-row">
                            <p>Categories:</p>
                            <p>{categoriesQuery.data.length}</p>
                        </div>
                        <div className="total-row">
                            <p>Activities:</p>
                            <p>{activitiesQuery.data.length}</p>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <button id="add-category" onClick={() => setNewCategoryModal("new-category")}>Add category</button>
                </div>
            </div>
            <div className="categories-list">
                {categoriesQuery.data !== undefined && categoriesQuery.data.map(category => {
                    return (
                        <Link key={category.id} to={`/activities?category=${category.categoryID}`}>
                            <div className="category">
                                <div className="cat-header">
                                    <p className="cat-title">{category.name}</p>
                                    <button onClick={(e) => removeCategory(e, category.id)}>X</button>
                                </div>
                                <div className="cat-total">
                                    <div className="cat-total-row">
                                        <p>Items:</p>
                                        <p>{countActivities(activitiesQuery.data, category)}</p>
                                    </div>
                                    <div className="cat-total-row">
                                        <p>Last update:</p>
                                        <p>12.04.2023 11:24</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

            <NewCategory newCategoryModal={newCategoryModal} setNewCategoryModal={setNewCategoryModal} refetchCategories={refetchCategories}/>
        </CategoriesStyled>
    )
}
