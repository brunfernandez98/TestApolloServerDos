import { db } from "../firebaseAdmin";


export const getStores = async() => {
    
    const querySnapshot = await db.collection("store").get();
    const store = querySnapshot.docs.map((doc: { id: any; data: () => any; }) => {
        return {
            id: doc.id,
            name: doc.data().name
        }
    });
    return store;
}
