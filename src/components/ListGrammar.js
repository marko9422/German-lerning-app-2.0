import { React,useState } from 'react';

import useFetchGrammar from '../hooks/useFetchGrammar';
import EditGrammar from './EditGrammar';

export default function ListGrammar() {

    const { loading, grammar } = useFetchGrammar()
    const [edit,setEdit] = useState('')

    const editGrammar = (id) => {
        setEdit(id)
    }

    return (
        <div className='container'>
            <div>{loading ? 'loading...' 
                : 
                grammar.map(({ id, answer }) => (
                    
                    edit == id ? <div>
                                    <p>edit:   {edit}id:   {id}</p> 
                                    <EditGrammar initialValue={answer} id={id}></EditGrammar>
                                </div>
                    :
                    
                    <div style={styles.grammarContainer} className='testStyle' key={id}>
                        <p>edit:   {edit}id:   {id}</p> 
                        <div
                            style={{
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontSize: '12pt'
                            }}
                            dangerouslySetInnerHTML={{ __html: answer }}
                        />
                        <button onClick={() => editGrammar(id)}>EDIT</button>
                    </div>
                ))
                }
                
            </div>

        </div>
    )


}

const styles = {
    grammarContainer: {
        border: '2px solid black',
        margin: '10px',
    }
};
