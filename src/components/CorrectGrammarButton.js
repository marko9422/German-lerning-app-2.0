import React, { useState } from 'react';
import './styles.css'
import Button from 'react-bootstrap/Button';
import useGetUserFromLocalStore from '../hooks/useGetUserFromLocalStore';
import axios from 'axios';


export default function CorrectGrammarButton(props) {

    const [userFromLocalStorage, emailWhichIsAsAGuess] = useGetUserFromLocalStore()

    const correct = (e) => {
        e.preventDefault()
        if (userFromLocalStorage.email !== emailWhichIsAsAGuess) {
            axios.post('http://localhost:8081/correct-grammar', {
                id: props.id,
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        } else {
            alert('Sorry, you do not have permission to save/edit data. You are currently in guest mode.');
        }
        const targetDiv = document.querySelector('.correctWrong');
        targetDiv.classList.add("unclicable");
    }

    const wrong = (e) => {
        e.preventDefault()
        if (userFromLocalStorage.email !== emailWhichIsAsAGuess) {
            axios.post('http://localhost:8081/wrong-grammar', {
                id: props.id,
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
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
