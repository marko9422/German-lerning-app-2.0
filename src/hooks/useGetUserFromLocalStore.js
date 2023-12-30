import { useEffect, useState } from 'react';

function useFetchCategories() {

    const [userFromLocalStorage, setUserFromLocalStorage] = useState('')
    const [emailWhichIsAsAGuess, setEmailWhichIsAsAGuess] = useState('test@test.com')

    useEffect(() => {
        const key = 'user';
        if (localStorage.getItem(key)) {
            const dataString  = localStorage.getItem(key);
            const data = JSON.parse(dataString);
            setUserFromLocalStorage(data);
        } else {
            console.log('Data with the specified key not found in local storage');
        }
    }, []);


    return (  [userFromLocalStorage , emailWhichIsAsAGuess]);
}

export default useFetchCategories;