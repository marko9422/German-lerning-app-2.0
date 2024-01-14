import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function AddNewWord(props) {

    const [inputs, setInputs] = useState({
        englishShortText: props.english || '',
        germanShortText: props.german || '',
        englishExample: props.englishExample || '',
        germanExample: props.germanExample || '',
    });

    const editWordsInsideDatabase = async (e) => {
        e.preventDefault()
        axios.post('http://localhost:8081/edit-word', {
            id: props.id,
            english: inputs.englishShortText,
            german: inputs.germanShortText,
            englishExample: inputs.englishExample,
            germanExample: inputs.germanExample
        })
            .then(res => {
                // console.log(res)
            })
            .catch(err => console.log(err))
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
            editWordsInsideDatabase(e)
            setInputs({})
            props?.callback(false,props.id,inputs.englishShortText,inputs.germanShortText,inputs.englishExample,inputs.germanExample)
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
