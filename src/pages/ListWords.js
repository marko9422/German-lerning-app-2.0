import { React, useState, useEffect } from 'react';
import useFetchWords from '../hooks/useFetchWords'
import ButtonsForWords from '../components/ButtonsForWords';
import EditWords from '../components/EditWords'
import Words_listedWord from '../components/Words_listedWord';
import NavbarMenu from '../components/NavbarMenu';
import Button from 'react-bootstrap/Button';


export default function ListWords() {

    const [loading, words] = useFetchWords()
    const [chooseListedLanguage, setChooseListedLanguage] = useState('english')
    const [editingThisWords, setEditingThisWords] = useState(false)
    const [randomlengthOfWord, setRandomlengthOfWord] = useState(null)

    useEffect(() => {
        setRandomlengthOfWord(Math.floor(Math.random() * words.length))
    },[])

    const nextWorld = () => {
        setRandomlengthOfWord(Math.floor(Math.random() * words.length))
    }

    const callback = (value) => {
        setEditingThisWords(value)
    }

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
      <>
      <NavbarMenu></NavbarMenu>
      
      <div className='container'>
        <h3>Choose listed</h3>
        <Button variant="info" onClick={() => setEnglishLanguage()}>English</Button>
        <Button variant="info" onClick={() => setGermanLanguage()}>German</Button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          // Loaded words from firebase...
          words.map(({ id, english, german, englishScore, germanScore, englishExample, germanExample }, index) => (
            <div key={id}>
              {editingThisWords === false && index === randomlengthOfWord && (
                <>
                  {chooseListedLanguage === 'german' ? (
                    <>
                      <Words_listedWord chooseListedLanguage={chooseListedLanguage} english={english} german={german} englishExample={englishExample} germanExample={germanExample}></Words_listedWord>
                    </>
                  ) : (
                    <>
                      <Words_listedWord chooseListedLanguage={chooseListedLanguage} english={english} german={german} englishExample={englishExample} germanExample={germanExample}></Words_listedWord>
                    </>
                  )}
                  <ButtonsForWords id={id} chooseListedLanguage={chooseListedLanguage} englishScore={englishScore} germanScore={germanScore}></ButtonsForWords>
                  <Button variant="warning" onClick={() => editWords(id)}>edit</Button>
                  <Button variant="dark" onClick={() => nextWorld()}>next</Button>
                </>
              )}
              {editingThisWords === true && index === randomlengthOfWord && (
                <EditWords {...{ callback }} id={id} english={english} german={german} englishExample={englishExample} germanExample={germanExample}></EditWords>
              )}
            </div>
          ))
        )}
      </div>
      </>
    );
    
}
