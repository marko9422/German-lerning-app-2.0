import { React, useState, useEffect } from 'react';

import useFetchGrammar from '../hooks/useFetchGrammar';
import EditGrammar from './EditGrammar';
import CorrectGrammarButton from './CorrectGrammarButton';

export default function ListGrammar() {

    const [loading, grammar] = useFetchGrammar()
    const [edit, setEdit] = useState('')
    const [editBoolean, setBoolean] = useState(false)
    const [randomNumberFromGrammar, setRandomNumberFromGrammar] = useState(0)



    const editGrammar = (id) => {
        setEdit(id)
        setBoolean(true)
    }


    // This function is helping to sent false from EditGrammar in this parent component.
    const callback = (value) => {
        setBoolean(value)
    }

    return (
        <div className='container'>
            <div>
                {loading
                    ? 'loading...'
                    : grammar.map(({ id, answer, score }, index) => (
                        (edit === id && editBoolean === true)
                            ? (
                                <div key={id}>
                                    <EditGrammar {...{ callback }} initialValue={answer} id={id}></EditGrammar>
                                </div>
                            )
                            : (grammar.length >= 0 && index === randomNumberFromGrammar)
                                ? (
                                    <div key={id}>
                                        <p>{grammar.length}</p>
                                        <div style={styles.grammarContainer} className='testStyle' >
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
                                )
                                : null
                    )
                    )}
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
