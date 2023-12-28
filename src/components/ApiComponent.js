import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import './ApiComponent.css'


export default function ApiComponent() {

    const [lookUpWord, setLookUpWord] = useState('API')
    const [searchWord, setSearchWord] = useState('')
    const [result_word, setResult_word] = useState('')
    const [result_definition, setResult_definition] = useState('')
    const [result_example, setResult_example] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchWord(lookUpWord)
    };

    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${lookUpWord}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'ad203fcbcbmsh829265e224c6d2ep1c0788jsnfb638b45340b',
                    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
                }
            };
            const response = await fetch(url, options);
            const result = await response.json();
            if (result.list && result.list.length > 0 && result.list[0]['definition'] !== undefined) {
                setResult_definition(result.list[0]['definition']);
                setResult_example(result.list[0]['example']);
                setResult_word(result.list[0]['word']);
            } else {
                setResult_definition('do not exist');
                setResult_example('do not exist');
                setResult_word('do not exist');
            }
        }
        fetchAPI()
    }, [searchWord]);

    return (
        <div className='API_form'>
            <Form onSubmit={handleSubmit}>
                <Form.Control
                    className="mb-2"
                    type="text"
                    autoComplete="off"
                    placeholder="Enter your password"
                    value={lookUpWord}
                    onChange={(e) => setLookUpWord(e.target.value)}
                >
                </Form.Control>
                <Button variant="primary" type="submit">GO look up word</Button>
            </Form>
            <p className='result_definition'><span className='description'>definition:</span> {result_definition}</p>
            <p className='result_example'><span className='description'>example:</span>{result_example}</p>
        </div>

    )
}
