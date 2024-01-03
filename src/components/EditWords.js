import { useRef, useState } from 'react';
import { db } from '../firebase/config'
import { doc, collection, updateDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddNewWord(props) {

    const [inputs, setInputs] = useState({
        englishShortText: props.english || '',
        germanShortText: props.german || '',
        englishExample: props.englishExample || '',
        germanExample: props.germanExample || '',
    });

    // const userCollectionRef = collection(db, 'words')
    // const editorRef = useRef(null);

    const editWordsInsideDatabase = async () => {
        const textareaDoc = doc(db, 'words', props.id)
        const updateTextarea = {
            english: inputs.englishShortText,
            german: inputs.germanShortText,
            englishExample: inputs.englishExample,
            germanExample: inputs.germanExample,
        }
        await updateDoc(textareaDoc, updateTextarea);
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
            editWordsInsideDatabase()
            setInputs({})
            props?.callback(false)
        }

    }

    return (
        <div className='container'>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3"  >
                    <Form.Control
                        name='englishShortText'
                        value={inputs.englishShortText || props.english}
                        placeholder='ENGLISH'
                        onChange={handleChange} type="text"
                        autoComplete="off" />
                </Form.Group>

                <Form.Group className="mb-3"  >
                    <Form.Control
                        name='germanShortText'
                        value={inputs.germanShortText || props.german}
                        placeholder='GERMAN'
                        onChange={handleChange}
                        type="text"
                        autoComplete="off" />
                </Form.Group>

                <Form.Group className="mb-3"  >
                    <Form.Control
                        name='englishExample'
                        value={inputs.englishExample || props.englishExample}
                        placeholder='English sentense example.'
                        onChange={handleChange} type="text"
                        autoComplete="off" />
                </Form.Group>

                <Form.Group className="mb-3"  >
                    <Form.Control
                        name='germanExample'
                        value={inputs.germanExample || props.germanExample}
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
