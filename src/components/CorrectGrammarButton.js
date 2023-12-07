import React from 'react'

import { db } from '../firebase/config'
// Imports components.
import { updateDoc, doc } from 'firebase/firestore';

export default function CorrectGrammarButton(props) {

    const correct = async () => {
        const textareaDoc = doc(db, 'textarea', props.id)
        const updateTextarea = { score: props.score + 1 }
        await updateDoc(textareaDoc, updateTextarea);
    }

    const wrong = async () => {
        const textareaDoc = doc(db, 'textarea', props.id)
        const updateTextarea = { score: props.score - 1 }
        await updateDoc(textareaDoc, updateTextarea);
    }

    const doNotShowAgain = async () => {
        const textareaDoc = doc(db, 'textarea', props.id)
        const updateTextarea = { visible: false }
        await updateDoc(textareaDoc, updateTextarea);
    }

    return (
        <>
            <button onClick={() => wrong()}>wrong</button>
            <button onClick={() => correct()}>correct</button>
            <button onClick={() => doNotShowAgain()}>Do not show again.</button>
        </>
    )
}
