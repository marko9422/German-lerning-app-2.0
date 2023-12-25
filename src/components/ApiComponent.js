import { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';


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
            setResult_definition(result.list[0]['definition']);
            setResult_example(result.list[0]['example']);
            setResult_word(result.list[0]['word']);
        }
        fetchAPI()
    }, [searchWord]);

    return (
        <div>
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
            <p>{result_word}</p>
            <p>{result_definition}</p>
            <p>{result_example}</p>
        </div>

    )
}
