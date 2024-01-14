import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchCategories() {

    const [loadingCategories,setLoading] = useState(true)
    const [category, setCategory] = useState([])


    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8081/categories');
            // console.log(response);
            setCategory(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await fetchCategories();
        };

        fetchData();
    }, []); // Empty dependency array to run only once during mount

    return [loadingCategories, category, fetchCategories];
}

export default useFetchCategories;