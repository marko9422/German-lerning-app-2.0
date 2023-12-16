import React from 'react'
import './styles.css'
import { db } from '../firebase/config'
import { updateDoc, doc } from 'firebase/firestore';

export default function CorrectGrammarButton(props) {

    const correct = async () => {
        const textareaDoc = doc(db, 'textarea', props.id)
        const updateTextarea = { score: props.score + 1 }
        await updateDoc(textareaDoc, updateTextarea);
        const targetDiv = document.querySelector('.correctWrong');
        targetDiv.classList.add("unclicable");
    }

    const wrong = async () => {
        const textareaDoc = doc(db, 'textarea', props.id)
        const updateTextarea = { score: props.score - 1 }
        await updateDoc(textareaDoc, updateTextarea);
        const targetDiv = document.querySelector('.correctWrong');
        targetDiv.classList.add("unclicable");
    }

    return (
        <>
        <div className='correctWrong'>
            <button onClick={correct} >correct</button>
            <button onClick={wrong} >wrong</button>
        </div> 
        </>
    )
}
