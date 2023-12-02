import { React, useEffect, useState } from 'react';
import { db } from '../firebase/config'
// Imports components.
import { collection, getDocs } from 'firebase/firestore';

function FetchDataFromFirebase() {

    const [data, setData] = useState([])

    const userCollectionRef = collection(db, 'textarea')
    // useEffect(() => {
    //     const fetchDataFromFirestore = async () => {
    //         const data = await getDocs(userCollectionRef);
    //         setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     }

    //     fetchDataFromFirestore()
    // }, [])

    return (
        <div className='container'>
            <p>test router FetchDataFromFirebase</p>
            {data.map(({ id, answer }) => (
                <div key={id}>
                    <p>{id}</p>
                    <p>{answer}</p>
                </div>
            ))}
        </div>
    );
}

export default FetchDataFromFirebase;

