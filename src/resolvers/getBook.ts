import { db } from "../firebaseAdmin";


export const getBooks = async() => {
    
    const querySnapshot = await db.collection("books").get();
    const books = querySnapshot.docs.map((doc: { id: any; data: () => any; }) => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });
    return books;
}
