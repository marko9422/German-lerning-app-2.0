import { React, useState, useEffect } from 'react';
import useFetchGrammar from '../hooks/useFetchGrammar';
import EditGrammar from '../components/EditGrammar';
import CorrectGrammarButton from '../components/CorrectGrammarButton';
import ShowGrammar from '../components/ShowGrammar';
import NavbarMenu from '../components/NavbarMenu';
import Button from 'react-bootstrap/Button';
import useGetUserFromLocalStore from '../hooks/useGetUserFromLocalStore';


export default function ListGrammar() {

    const [userFromLocalStorage, emailWhichIsAsAGuess] = useGetUserFromLocalStore()
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
        if (userFromLocalStorage.email !== emailWhichIsAsAGuess){
            setEdit(id)
            setEditorToeditCurrentGrammar(true)
            setCurrentlyEditing(randomlengthOfGrammar)
        } else {
            alert('Sorry, you do not have permission to save/edit data. You are currently in guest mode.');
        }
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
                                    <ShowGrammar answer={answer}></ShowGrammar>
                                    <Button variant="warning" onClick={() => editGrammar(id)}>EDIT</Button>
                                    <CorrectGrammarButton id={id} score={score} />
                                    <button onClick={() => nextGrammar()}>next</button>
                                </div>
                            ) : (typeof currentlyEditing === 'number' && index === currentlyEditing) ? (
                                
                                <div key={id}>
                                    <ShowGrammar answer={answer}></ShowGrammar>
                                    <Button variant="warning" onClick={() => editGrammar(id)}>EDIT</Button>
                                    <CorrectGrammarButton id={id} score={score} />
                                    <Button variant="dark" onClick={() => nextGrammar()}>next</Button>
                                </div>
                            ) : null
                        )
                        
                        ))}
                    
            </div>
        </div>
        </>
    );

}
