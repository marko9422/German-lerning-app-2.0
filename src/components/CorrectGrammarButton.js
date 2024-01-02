import React, { useState } from 'react';
import './styles.css'
import { db } from '../firebase/config'
import { updateDoc, doc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import useGetUserFromLocalStore from '../hooks/useGetUserFromLocalStore';


export default function CorrectGrammarButton(props) {

    const [userFromLocalStorage, emailWhichIsAsAGuess] = useGetUserFromLocalStore()

    const correct = async () => {
        if (userFromLocalStorage.email !== emailWhichIsAsAGuess){
            const textareaDoc = doc(db, 'textarea', props.id)
            const updateTextarea = { score: props.score + 1 }
            await updateDoc(textareaDoc, updateTextarea);
        } else {
            alert('Sorry, you do not have permission to save/edit data. You are currently in guest mode.');
        }
        const targetDiv = document.querySelector('.correctWrong');
        targetDiv.classList.add("unclicable");
    }

    const wrong = async () => {
        if (userFromLocalStorage.email !== emailWhichIsAsAGuess){
            const textareaDoc = doc(db, 'textarea', props.id)
            const updateTextarea = { score: props.score - 1 }
            await updateDoc(textareaDoc, updateTextarea);
        } else {
            alert('Sorry, you do not have permission to save/edit data. You are currently in guest mode.');
        }
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
