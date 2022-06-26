import { db } from "../config/firebase"
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"
import { DateTime } from "luxon"

const itemsRef = collection(db, "users", "llglIFWglgX34uYuYBHi", "items")

export async function addItem(activityID, date, skip, comment, value) {
    console.log(date)
    console.log(DateTime.fromFormat(date, "yyyy-MM-dd").ts)
    const id = await getItems()
    addDoc(itemsRef, {
        itemID: id.length + 1,
        activityID,
        date: DateTime.fromFormat(date, "yyyy-MM-dd").ts,
        skip,
        comment,
        value
    })
}

export async function deteleItem(id) {
    const docRef = doc(db, "users/llglIFWglgX34uYuYBHi/items", id)
    deleteDoc(docRef)
}

async function getItems() {
    const firebaseItems = await getDocs(itemsRef)
    let items = []
    firebaseItems.docs.forEach(item => {
        items.push({...item.data(), id: item.id})
    })
    return items
}
