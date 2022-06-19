import { db } from "../config/firebase"
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"

const activitiesRef = collection(db, "users", "llglIFWglgX34uYuYBHi", "activities")

export async function addActivity(name, category) {
    const id = await getActivities()
    addDoc(activitiesRef, {
        activityID: id.length + 1,
        category: category,
        name: name
    })
}

export async function deteleActivity(id) {
    const docRef = doc(db, "users/llglIFWglgX34uYuYBHi/activities", id)
    deleteDoc(docRef)
}

async function getActivities() {
    const firebaseActivities = await getDocs(activitiesRef)
    let activities = []
    firebaseActivities.docs.forEach(activity => {
        activities.push({...activity.data(), id: activity.id})
    })
    return activities
}
