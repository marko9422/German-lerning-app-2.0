import { React, useEffect, useState } from 'react';
import { db } from '../firebase/config'
// Imports components.
import { collection, addDoc } from 'firebase/firestore';

function SaveIntoFirestore(props) {
    const userCollectionRef = collection(db, 'textarea')
    // const [newValue, setNewValue] = useState('test please work')

    const saveIntoFirestore = async () => {
        await addDoc(userCollectionRef,{asnwer: props.textarea});
    }

    return (
        <div>
            {/* {props.textarea} */}

            <button onClick={saveIntoFirestore}>ADD</button>
        </div>

    );
}

export default SaveIntoFirestore;

