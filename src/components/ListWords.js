import { React, useState, useEffect } from 'react';
import useFetchWords from '../hooks/useFetchWords'
import ButtonsForWords from './ButtonsForWords';


export default function ListWords() {

    const [loading, words] = useFetchWords()
    const [chooseListedLanguage, setChooseListedLanguage] = useState('english')

    // Set listed language of the first words.
    const setEnglishLanguage = () =>{
        setChooseListedLanguage('english')
    }

    const setGermanLanguage = () =>{
        setChooseListedLanguage('german')
    }

    return (
        <div className='container'>
            <h3>Choose listed</h3>
            <button onClick={() => setEnglishLanguage()}>English</button>
            <button onClick={() => setGermanLanguage()}>German</button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                // Loaded words from firebase...
                words.map(({ id, english, german, englishScore, germanScore, visible }, index) => (
                    <div key={id}>
                    {chooseListedLanguage == 'german' ?
                        (<>
                        <p>{english}</p>
                        <p>{german}</p>
                        <p>{englishScore}</p>
                        <p>{germanScore}</p>
                        <ButtonsForWords id={id} chooseListedLanguage={chooseListedLanguage} englishScore={englishScore} germanScore={germanScore}></ButtonsForWords>
                        </>) : (
                        <>
                        <p>{german}</p>
                        <p>{english}</p>
                        <p>{englishScore}</p>
                        <p>{germanScore}</p>
                        <ButtonsForWords id={id} chooseListedLanguage={chooseListedLanguage} englishScore={englishScore} germanScore={germanScore}></ButtonsForWords>
                        </>)
                    }
                    </div>
                ))
            )}
        </div>
    )
}
