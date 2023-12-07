import { useEffect, useState } from 'react';
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore';

function useFetchGrammar() {

    const [loading,setLoading] = useState(true)
    const [grammar, setGrammar] = useState([])


    const userCollectionRef = collection(db, 'textarea')

    useEffect(() => {
        const fetchGrammarFromFirestore = onSnapshot(userCollectionRef, (snapshot) => {
            setGrammar(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setLoading(false);
        });

    
        // The returned function will be called when the component unmounts
        return () => fetchGrammarFromFirestore();
    }, []);


    return (  [loading , grammar]);
}

export default useFetchGrammar;
