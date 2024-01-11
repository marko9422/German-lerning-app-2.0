import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchGrammar() {

    const [loading, setLoading] = useState(true)
    const [grammar, setGrammar] = useState([])

    const fetchGrammar = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8081/getGrammar');
            console.log(response);
            setGrammar(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchGrammar();
            // Here, you can perform additional actions after fetching data, if needed
        };

        fetchData();
    }, []); // Empty dependency array to run only once during mount

    return [loading, grammar, fetchGrammar];
}

export default useFetchGrammar;
