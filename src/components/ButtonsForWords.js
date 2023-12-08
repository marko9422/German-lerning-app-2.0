import React from 'react'

import { db } from '../firebase/config'
// Imports components.
import { updateDoc, doc } from 'firebase/firestore';

export default function ButtonsForWords(props) {

    const correct = async () => {
        if (props.chooseListedLanguage == 'english'){
            const textareaDoc = doc(db, 'words', props.id)
            const updateTextarea = { englishScore: props.englishScore + 1 }
            await updateDoc(textareaDoc, updateTextarea);
        } else {
            const textareaDoc = doc(db, 'words', props.id)
            const updateTextarea = { germanScore: props.germanScore + 1 }
            await updateDoc(textareaDoc, updateTextarea);
        }
    }

    const wrong = async () => {
        const textareaDoc = doc(db, 'words', props.id)
        const updateTextarea = { score: props.score - 1 }
        await updateDoc(textareaDoc, updateTextarea);
    }

    const doNotShowAgain = async () => {
        const textareaDoc = doc(db, 'words', props.id)
        const updateTextarea = { visible: false }
        await updateDoc(textareaDoc, updateTextarea);
    }

    return (
        <>
            <button onClick={() => correct()}>correct</button>
            <button onClick={() => wrong()}>wrong</button>
            <button onClick={() => doNotShowAgain()}>Do not show again.</button>
        </>
    )
}
