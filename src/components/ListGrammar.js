import { React, useState, useEffect } from 'react';

import useFetchGrammar from '../hooks/useFetchGrammar';
import EditGrammar from './EditGrammar';
import CorrectGrammarButton from './CorrectGrammarButton';

export default function ListGrammar() {

    const [loading, grammar] = useFetchGrammar()
    const [edit, setEdit] = useState('')
    const [openEditorToEditCurrentGrammar, setEditorToeditCurrentGrammar] = useState(false)

    const [randomlengthOfGrammar, setRandomlengthOfGrammar] = useState(null)
    const [currentlyEditing, setCurrentlyEditing] = useState(null)


    const editGrammar = (id) => {
        setEdit(id)
        setEditorToeditCurrentGrammar(true)
        setCurrentlyEditing(randomlengthOfGrammar)
    }

    // This function is helping to sent false from EditGrammar in this parent component.
    const callback = (value) => {
        setEditorToeditCurrentGrammar(value)
    }

    useEffect(() => {
        setRandomlengthOfGrammar(Math.floor(Math.random() * grammar.length))
    }, [grammar])

    return (
        <div className='container'>
            <div>
                {loading
                    ? 'loading...'
                    : grammar.map(({ id, answer, score }, index) => (
                        edit === id && openEditorToEditCurrentGrammar === true ? (
                            <div key={id}>
                                <EditGrammar {...{ callback }} initialValue={answer} id={id}></EditGrammar>
                            </div>
                        ) : (
                            (typeof currentlyEditing === 'number' && index === currentlyEditing) ? (
                                <div key={id}>
                                    <p>{randomlengthOfGrammar}</p>
                                    <p>{currentlyEditing}</p>
                                    <p>{index}</p>
                                    <div style={styles.grammarContainer} className='testStyle'>
                                        <div
                                            style={{
                                                fontFamily: 'Helvetica, Arial, sans-serif',
                                                fontSize: '12pt'
                                            }}
                                            dangerouslySetInnerHTML={{ __html: answer }}
                                        />
                                    </div>
                                    <p>{score}</p>
                                    <button onClick={() => editGrammar(id)}>EDIT</button>
                                    <CorrectGrammarButton id={id} score={score} />
                                </div>
                            ) : index === randomlengthOfGrammar ? (
                                <div key={id}>
                                    <p>{randomlengthOfGrammar}</p>
                                    <p>{+currentlyEditing}</p>
                                    <p>{index}</p>
                                    <div style={styles.grammarContainer} className='testStyle'>
                                        <div
                                            style={{
                                                fontFamily: 'Helvetica, Arial, sans-serif',
                                                fontSize: '12pt'
                                            }}
                                            dangerouslySetInnerHTML={{ __html: answer }}
                                        />
                                    </div>
                                    <p>{score}</p>
                                    <button onClick={() => editGrammar(id)}>EDIT</button>
                                    <CorrectGrammarButton id={id} score={score} />
                                </div>
                            ) : null
                        )
                    ))}
            </div>
        </div>
    );





}

const styles = {
    grammarContainer: {
        border: '2px solid black',
        margin: '10px',
    }
};
