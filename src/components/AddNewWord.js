import { useRef,useState, useEffect } from 'react';
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddNewWord() {

    const [inputs, setInputs] = useState({});

    const userCollectionRef = collection(db, 'words')
    const editorRef = useRef(null);

    const saveIntoFirestore = async () => {
        await addDoc(userCollectionRef, { 
            english: inputs.englishShortText,
            german: inputs.germanShortText,
            englishExample: inputs.englishExample,
            germanExample: inputs.germanExample,
            englishScore: 10000,
            germanScore: 10000,
            visible: true,
            class: 'test'
        });
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // FILL THE TEXT ALLERT IF IS IMPUT EMPTY.
        if (!inputs.englishShortText || !inputs.germanShortText) {
            alert('Please fill in the text.');
            return;   
        } else {
            saveIntoFirestore()
            setInputs({})
        }

    }

    return (
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

                <Button variant="primary" type="submit">Submit</Button>

            </Form>

        </div>
    )
}
