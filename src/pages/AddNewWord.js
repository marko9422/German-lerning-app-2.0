import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavbarMenu from '../components/NavbarMenu';
import useFetchCategories from '../hooks/useFetchCategories';
import useGetUserFromLocalStore from '../hooks/useGetUserFromLocalStore';
import axios from 'axios';

export default function AddNewWord() {

    const [userFromLocalStorage, emailWhichIsAsAGuess] = useGetUserFromLocalStore()
    const [loadingCategories, category, fetchCategories] = useFetchCategories()
    const [inputs, setInputs] = useState({});
    const [newCategory, setNewCategory] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('test')

    const saveWordIntoSQL = (e) => {
        if (userFromLocalStorage.email !== emailWhichIsAsAGuess) {
            e.preventDefault()
            axios.post('http://localhost:8081/save-newWord', {
                german: inputs.germanShortText,
                english: inputs.englishShortText,
                english_score: 10000,
                german_score: 10000,
                category: selectedCategory,
                visible: 1,
                englishExample: inputs.englishExample || 'empty',
                germanExample: inputs.germanExample || 'leer',
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))
        } else {
            alert('Sorry, you do not have permission to save/edit data. You are currently in guest mode.');
        }
    }

    const saveCategoryIntoSQL = (e) => {
        if (userFromLocalStorage.email !== emailWhichIsAsAGuess) {
            e.preventDefault()
            axios.post('http://localhost:8081/save-cetegory', {
                category: newCategory
            })
                .then(res => {
                    // console.log(res)
                    // After post new category into SQL fetchCategories from SQL.
                    fetchCategories()
                })
                .catch(err => console.log(err))
        } else {
            alert('Sorry, you do not have permission to save/edit data. You are currently in guest mode.');
        }
    }

    const handleRadioChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // FILL THE TEXT ALLERT IF IS IMPUT EMPTY.
        if (!inputs.englishShortText || !inputs.germanShortText) {
            alert('Please fill ENGLISH and GERMAN fields.');
            return;
        } else {
            saveWordIntoSQL(e)
            setInputs({})
        }
    }

    const handleNewCategory = async (e) => {
        e.preventDefault();
        if (userFromLocalStorage.email !== emailWhichIsAsAGuess) {
            if (!newCategory) {
                alert('Please fill category');
                return;
            }
            await saveCategoryIntoSQL(e);
            setNewCategory('')
        } else {
            alert('Sorry, you do not have permission to save/edit data. You are currently in guest mode.');
            setNewCategory('')
        }

    }

    return (
        <>
            <NavbarMenu></NavbarMenu>
            <div className='container'>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3"  >
                        <Form.Control
                            name='englishShortText'
                            value={inputs.englishShortText || ''}
                            placeholder='ENGLISH'
                            onChange={handleChange} type="text"
                            autoComplete="off" />
                    </Form.Group>

                    <Form.Group className="mb-3"  >
                        <Form.Control
                            name='germanShortText'
                            value={inputs.germanShortText || ''}
                            placeholder='GERMAN'
                            onChange={handleChange}
                            type="text"
                            autoComplete="off" />
                    </Form.Group>

                    <Form.Group className="mb-3"  >
                        <Form.Control
                            name='englishExample'
                            value={inputs.englishExample || ''}
                            placeholder='English sentense example.'
                            onChange={handleChange} type="text"
                            autoComplete="off" />
                    </Form.Group>

                    <Form.Group className="mb-3"  >
                        <Form.Control
                            name='germanExample'
                            value={inputs.germanExample || ''}
                            placeholder='German sentense example.'
                            onChange={handleChange}
                            type="text"
                            autoComplete="off" />
                    </Form.Group>

                    {loadingCategories ? 'loading categories...'
                        :
                        category.map((one) =>
                            <div key={one.id}>
                                <input
                                    type="radio"
                                    id={`category-${one.id}`}
                                    name="selectedCategory"
                                    value={one.category}
                                    checked={one.category === selectedCategory}
                                    onChange={handleRadioChange}
                                />
                                <label htmlFor={`category-${one.id}`}>{one.category}</label>
                            </div>

                        )}

                    <Button variant="primary" type="submit">Submit</Button>

                </Form>


                <Form onSubmit={handleNewCategory} >
                    <Form.Group className="mb-3"  >
                        <Form.Control
                            name='category'
                            value={newCategory}
                            placeholder='add new category'
                            onChange={(e) => setNewCategory(e.target.value)}
                            type="text"
                            autoComplete="off" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Add category</Button>

                </Form>


            </div>
        </>
    )
}
