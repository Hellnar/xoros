
import { db } from "../config/firebase"
import { collection, getDocs } from "firebase/firestore"

const userRef = collection(db, "users")
const categoriesRef = collection(db, "users", "llglIFWglgX34uYuYBHi", "categories")
const activitiesRef = collection(db, "users", "llglIFWglgX34uYuYBHi", "activities")
const itemsRef = collection(db, "users", "llglIFWglgX34uYuYBHi", "items")

export async function getUser() {
    const firebaseUsers = await getDocs(userRef)
    let users = []
    firebaseUsers.docs.forEach(user => {
        users.push({...user.data(), id: user.id})
    })
    return users
}

export async function getCategories() {
    console.log(`refetching categories`)
    const firebaseCategories = await getDocs(categoriesRef)
    let categories = []
    firebaseCategories.docs.forEach(category => {
        categories.push({...category.data(), id: category.id})
    })
    return categories
}

export async function getActivities() {
    const firebaseActivities = await getDocs(activitiesRef)
    let activities = []
    firebaseActivities.docs.forEach(activity => {
        activities.push({...activity.data(), id: activity.id})
    })
    return activities
}

export async function getItems() {
    const firebaseItems = await getDocs(itemsRef)
    let items = []
    firebaseItems.docs.forEach(item => {
        items.push({...item.data(), id: item.id})
    })
    return items
}