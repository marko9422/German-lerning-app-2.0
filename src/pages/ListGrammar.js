import { React, useState, useEffect } from 'react';
import useFetchGrammar from '../hooks/useFetchGrammar';
import EditGrammar from '../components/EditGrammar';
import CorrectGrammarButton from '../components/CorrectGrammarButton';
import ShowGrammar from '../components/ShowGrammar';
import NavbarMenu from '../components/NavbarMenu';

export default function ListGrammar() {

    const [loading, grammar] = useFetchGrammar()
    const [edit, setEdit] = useState('')
    const [openEditorToEditCurrentGrammar, setEditorToeditCurrentGrammar] = useState(false)

    const [randomlengthOfGrammar, setRandomlengthOfGrammar] = useState(null)
    const [currentlyEditing, setCurrentlyEditing] = useState(null)

    // Press button next to generate random grammar and return that new random grammar.
    const nextGrammar = () =>{
        const randomNext = Math.floor(Math.random() * grammar.length)
        setRandomlengthOfGrammar(randomNext )
        setCurrentlyEditing(randomNext )
    }

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
        if(typeof currentlyEditing === 'number'){
            setRandomlengthOfGrammar(currentlyEditing)
        } else{
            setRandomlengthOfGrammar(Math.floor(Math.random() * grammar.length))
        }   
    }, [grammar])

    return (
        <>
        <NavbarMenu></NavbarMenu>
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
                            (index === randomlengthOfGrammar) ? (
                                <div key={id}>
                                    <p>{id}</p>
                                    <ShowGrammar answer={answer}></ShowGrammar>
                                    <button onClick={() => editGrammar(id)}>EDIT</button>
                                    <CorrectGrammarButton id={id} score={score} />
                                    <button onClick={() => nextGrammar()}>next</button>
                                </div>
                            ) : (typeof currentlyEditing === 'number' && index === currentlyEditing) ? (
                                
                                <div key={id}>
                                    <p>{id}</p>
                                    <ShowGrammar answer={answer}></ShowGrammar>
                                    <button onClick={() => editGrammar(id)}>EDIT</button>
                                    <CorrectGrammarButton id={id} score={score} />
                                    <button onClick={() => nextGrammar()}>next</button>
                                </div>
                            ) : null
                        )
                        
                        ))}
                    
            </div>
        </div>
        </>
    );

}

// const styles = {
//     grammarContainer: {
//         border: '2px solid black',
//         margin: '10px',
//     }
// };
