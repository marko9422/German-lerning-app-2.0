import { React, useEffect, useState } from 'react';
import { db } from '../firebase/config'
// Imports components.
import { collection, getDocs } from 'firebase/firestore';

export default function ListGrammar() {

    const [data, setData] = useState([])

    const userCollectionRef = collection(db, 'textarea')
    useEffect(() => {
        const fetchDataFromFirestore = async () => {
            const data = await getDocs(userCollectionRef);
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        // fetchDataFromFirestore()
    }, [])

    return (
        <div className='container'>
            {data.map(({ id, answer }) => (
                <div className='testStyle' key={id}>
                    <div
                        style={{
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontSize: '12pt'
                        }}
                        dangerouslySetInnerHTML={{ __html: answer }}
                    />
                </div>
            ))}

        {/* {console.log(data.asnwer)} */}
        </div>
    )
}
