import { useRef, useState, useEffect } from 'react';
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavbarMenu from '../components/NavbarMenu';
import useFetchCategories from '../hooks/useFetchCategories';

export default function AddNewWord() {

    const [loadingCategories, category] = useFetchCategories()
    const [inputs, setInputs] = useState({});
    const [newCategory, setNewCategory] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('test')

    // const editorRef = useRef(null);

    const userCollectionRef = collection(db, 'words')
    const saveIntoFirestore = async () => {
        await addDoc(userCollectionRef, {
            english: inputs.englishShortText,
            german: inputs.germanShortText,
            englishExample: inputs.englishExample || 'empty',
            germanExample: inputs.germanExample || 'leer',
            englishScore: 10000,
            germanScore: 10000,
            visible: true,
            category: selectedCategory
        });
    }

    const categories_of_wordsCollectionRef = collection(db, 'categories_of_words')
    const saveCategoryIntoFirestore = async () => {
        await addDoc(categories_of_wordsCollectionRef, {
            category: newCategory,
        });
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
            saveIntoFirestore()
            setInputs({})
        }
    }

    const handleNewCategory = (e) => {
        e.preventDefault();
        console.log(newCategory)
        saveCategoryIntoFirestore()
        setNewCategory('')
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

                    <Button variant="primary" type="submit">Submit</Button>

                </Form>


            </div>
        </>
    )
}
