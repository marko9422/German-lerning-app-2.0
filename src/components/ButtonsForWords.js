import { db } from '../firebase/config'
import React from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import './styles.css';
import useGetUserFromLocalStore from '../hooks/useGetUserFromLocalStore';
import axios from 'axios';



export default function ButtonsForWords(props) {

    const [userFromLocalStorage, emailWhichIsAsAGuess] = useGetUserFromLocalStore()

    // const correct = async () => {
    //     if (userFromLocalStorage.email !== emailWhichIsAsAGuess) {
    //         if (props.chooseListedLanguage === 'english') {
    //             const textareaDoc = doc(db, 'words', props.id)
    //             const updateTextarea = { englishScore: props.englishScore + 1 }
    //             await updateDoc(textareaDoc, updateTextarea);
    //         } else {
    //             const textareaDoc = doc(db, 'words', props.id)
    //             const updateTextarea = { germanScore: props.germanScore + 1 }
    //             await updateDoc(textareaDoc, updateTextarea);
    //         }
    //     } else {
    //         alert('Sorry, you do not have permission to save/edit data. You are currently in guest mode.');
    //     }

    //     const targetDiv = document.querySelector('.correctWrong');
    //     targetDiv.classList.add("unclicable");
    // }

    const correct = (e) => {
        e.preventDefault()
        if (userFromLocalStorage.email !== emailWhichIsAsAGuess) {
            if (props.chooseListedLanguage === 'english'){
                axios.post('http://localhost:8081/correct-english-score', {
                    id: props.id,
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            } else {
                axios.post('http://localhost:8081/correct-german-score', {
                    id: props.id,
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        } else {
            alert('Sorry, you do not have permission to save/edit data. You are currently in guest mode.');
        }
        const targetDiv = document.querySelector('.correctWrong');
        targetDiv.classList.add("unclicable");
    }

    const wrong = (e) => {
        e.preventDefault()
        if (userFromLocalStorage.email !== emailWhichIsAsAGuess) {
            if (props.chooseListedLanguage === 'english'){
                axios.post('http://localhost:8081/wrong-english-score', {
                    id: props.id,
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            } else {
                axios.post('http://localhost:8081/wrong-german-score', {
                    id: props.id,
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
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





