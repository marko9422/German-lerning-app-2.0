import { React, useState, useEffect } from 'react';
import useFetchWords from '../hooks/useFetchWords'


export default function ListWords() {

    const [loading, words] = useFetchWords()

    return (
        <div className='container'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                words.map(({ id, english, german, englishScore, germanScore, visible }, index) => (
                    <div key={id}>
                        <p>{id}</p>
                        <p>{english}</p>
                        <p>{german}</p>
                        <p>{englishScore}</p>
                        <p>{germanScore}</p>
                    </div>
                ))
            )}
        </div>
    )
}
