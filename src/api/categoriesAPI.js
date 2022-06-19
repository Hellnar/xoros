import { db } from "../config/firebase"
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"

const categoriesRef = collection(db, "users", "llglIFWglgX34uYuYBHi", "categories")

export async function addCategory(name) {
    const id = await getCategories()
    addDoc(categoriesRef, {
        categoryID: id.length + 1,
        name: name
    })
}

export async function deteleCategory(id) {
    const docRef = doc(db, "users/llglIFWglgX34uYuYBHi/categories", id)
    deleteDoc(docRef)
}

async function getCategories() {
    const firebaseCategories = await getDocs(categoriesRef)
    let categories = []
    firebaseCategories.docs.forEach(category => {
        categories.push({...category.data(), id: category.id})
    })
    return categories
}
