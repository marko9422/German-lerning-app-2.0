import { useEffect, useState } from 'react';
import { db } from '../firebase/config'
import { collection, getDocs } from 'firebase/firestore';

function useFetchGrammar() {

    const [loading,setLoading] = useState(true)
    const [grammar, setGrammar] = useState([])

    const userCollectionRef = collection(db, 'textarea')
    useEffect(() => {
        const fetchGrammarFromFirestore = async () => {
            const grammar = await getDocs(userCollectionRef);
            setGrammar(grammar.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setLoading(false)
        }

        fetchGrammarFromFirestore()
    }, [])

    return ( { loading , grammar});
}

export default useFetchGrammar;
