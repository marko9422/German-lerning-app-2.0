import { useEffect, useState } from 'react';
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore';

function useFetchCategories() {

    const [loading,setLoading] = useState(true)
    const [category, setCategory] = useState([])


    const userCollectionRef = collection(db, 'categories_of_words')

    useEffect(() => {
        const fetchcategoryFromFirestore = onSnapshot(userCollectionRef, (snapshot) => {
            setCategory(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setLoading(false);
        });
    
        // The returned function will be called when the component unmounts
        return () => fetchcategoryFromFirestore();
    }, []);


    return (  [loading , category]);
}

export default useFetchCategories;