import { React, useState, useEffect } from 'react';
import useFetchWords from '../hooks/useFetchWords'
import ButtonsForWords from '../components/ButtonsForWords';
import EditWords from '../components/EditWords'
import Words_listedWord from '../components/Words_listedWord';
import NavbarMenu from '../components/NavbarMenu';
import Button from 'react-bootstrap/Button';
import useFetchCategories from '../hooks/useFetchCategories';
import Form from 'react-bootstrap/Form';
import useGetUserFromLocalStore from '../hooks/useGetUserFromLocalStore';


export default function ListWords() {

  const [userFromLocalStorage, emailWhichIsAsAGuess] = useGetUserFromLocalStore()
  const [loading, words, fetchWords] = useFetchWords()
  const [chooseListedLanguage, setChooseListedLanguage] = useState('english')
  const [editingThisWords, setEditingThisWords] = useState(false)
  const [randomlengthOfWord, setRandomlengthOfWord] = useState(null)
  const [loadingCategories, category, fetchCategories] = useFetchCategories()

  const [listedCategory, setListedCategory] = useState('all')
  const [wordsFilteredByCategory, setWordsFilteredByCategory] = useState(words)


  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setListedCategory(selectedCategory);
    if (selectedCategory === 'all') {
      setWordsFilteredByCategory(words)
    } else {
      setWordsFilteredByCategory(words.filter(word => word.category === selectedCategory));
    }
  };
  // On load page wait till loading is from false true and execute useEffect and set words WordsFilteredByCategory. Load random number from all words to avoid return first word from database.
  useEffect(() => {
    setWordsFilteredByCategory(words)
    setRandomlengthOfWord(Math.floor(Math.random() * words.length))
  }, [loading])

  // On chage category, change wordsFilteredByCategory and execute useEffect, after that generate RandomlengthOfWord from wordsFilteredByCategory.
  useEffect(() => {
    setRandomlengthOfWord(Math.floor(Math.random() * wordsFilteredByCategory.length))
  }, [wordsFilteredByCategory])


  const nextWorld = () => {
    setRandomlengthOfWord(Math.floor(Math.random() * wordsFilteredByCategory.length))
  }

  const callback = (value,id,englishShortText,germanShortText,englishExample,germanExample) => {
    setEditingThisWords(value)
    const updatedWord = words.find(word => word.id === id);
    if (updatedWord) {
      // console.log('Found word:', updatedWord);
  
      // Now you can update the properties of the found word
      updatedWord.english = englishShortText;
      updatedWord.german = germanShortText;
      updatedWord.englishExample = englishExample || 'empty';
      updatedWord.germanExample = germanExample || 'leer';
  
      // console.log('Updated word:', updatedWord);
  } else {
      // console.log('Word with id', id, 'not found');
  }
  }

  const editWords = (id) => {
    if (userFromLocalStorage.email !== emailWhichIsAsAGuess) {
      setEditingThisWords(true)
    } else {
      alert('Sorry, you do not have permission to save/edit data. You are currently in guest mode.');
    }
  }

  // Set listed language of the first words.
  const setEnglishLanguage = () => {
    setChooseListedLanguage('english')
  }

  const setGermanLanguage = () => {
    setChooseListedLanguage('german')
  }

  return (
    <>
      <NavbarMenu></NavbarMenu>

      <div className='container'>
        <h3>Choose listed</h3>
        <Button variant="info" onClick={() => setEnglishLanguage()}>English</Button>
        <Button variant="info" onClick={() => setGermanLanguage()}>German</Button>
        <Form.Select
          aria-label="Default select example"
          onChange={handleCategoryChange}
        >
          <option value='all'>List all categories.</option>
          {category.map((category) =>
            <option value={category.category}>{category.category}</option>
          )}
        </Form.Select>
        <p>{listedCategory}</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          // Loaded words from sql...
          wordsFilteredByCategory.map(({ id, english, german, englishScore, germanScore, englishExample, germanExample, category }, index) => (
            <div key={id}>

              {editingThisWords === false && index === randomlengthOfWord && (
                <>
                  {chooseListedLanguage === 'german' ? (
                    <>
                      <Words_listedWord listedCategory={listedCategory} chooseListedLanguage={chooseListedLanguage} english={english} german={german} englishExample={englishExample} germanExample={germanExample} category={category}></Words_listedWord>
                    </>
                  ) : (
                    <>
                      <Words_listedWord listedCategory={listedCategory} chooseListedLanguage={chooseListedLanguage} english={english} german={german} englishExample={englishExample} germanExample={germanExample} category={category}></Words_listedWord>
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
