import React from 'react'
import './styles.css'
import { db } from '../firebase/config'
import { updateDoc, doc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';


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
            <Button variant="success" onClick={correct} >correct</Button>
            <Button variant="danger" onClick={wrong} >wrong</Button>
        </div> 
        </>
    )
}
