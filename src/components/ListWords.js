import { React, useState, useEffect } from 'react';
import useFetchWords from '../hooks/useFetchWords'
import ButtonsForWords from './ButtonsForWords';
import EditWords from './EditWords'


export default function ListWords() {

    const [loading, words] = useFetchWords()
    const [chooseListedLanguage, setChooseListedLanguage] = useState('english')
    const [editingThisWords, setEditingThisWords] = useState(false)

    const editWords = (id) => {
        setEditingThisWords(true)

    }

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
                    {editingThisWords == false ?
                        chooseListedLanguage == 'german' ?
                            (<>
                            <p>{english}</p>
                            <p>{german}</p>
                            <ButtonsForWords id={id} chooseListedLanguage={chooseListedLanguage} englishScore={englishScore} germanScore={germanScore}></ButtonsForWords>
                            <button onClick={() => editWords(id)}>edit</button>
                            </>) : (
                            <>
                            <p>{german}</p>
                            <p>{english}</p>
                            <ButtonsForWords id={id} chooseListedLanguage={chooseListedLanguage} englishScore={englishScore} germanScore={germanScore}></ButtonsForWords>
                            <button onClick={() => editWords(id)}>edit</button>
                            </>)
                        
                    : <EditWords id={id} english={english} german={german}></EditWords>
                    }

                    </div>
                ))
            )}
        </div>
    )
}
