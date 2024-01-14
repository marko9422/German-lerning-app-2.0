import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchWords() {

    const [loading,setLoading] = useState(true)
    const [words, setWords] = useState([])

    const fetchWords = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8081/getWords');
            console.log(response);
            setWords(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchWords();
            // Here, you can perform additional actions after fetching data, if needed
        };

        fetchData();
    }, []); // Empty dependency array to run only once during mount

    return [loading, words, fetchWords];
}

export default useFetchWords;
