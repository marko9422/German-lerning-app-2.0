import { useEffect, useState } from 'react';
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore';

function useFetchGrammar() {

    const [loading,setLoading] = useState(true)
    const [words, setWords] = useState([])


    const userCollectionRef = collection(db, 'words')

    useEffect(() => {
        const fetchWordsFromFirestore = onSnapshot(userCollectionRef, (snapshot) => {
            setWords(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setLoading(false);
        });
    
        // The returned function will be called when the component unmounts
        return () => fetchWordsFromFirestore();
    }, []);


    return (  [loading , words]);
}

export default useFetchGrammar;
