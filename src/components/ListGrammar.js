import { React,useState } from 'react';

import useFetchGrammar from '../hooks/useFetchGrammar';
import EditGrammar from './EditGrammar';

export default function ListGrammar() {

    const { loading, grammar } = useFetchGrammar()
    const [edit,setEdit] = useState('')
    const [editBoolean,setBoolean] = useState(false)

    const editGrammar = (id) => {
        setEdit(id)
        setBoolean(true)
    }

    const callback = (value) => {
        setBoolean(value)
    }

    return (
        <div className='container'>
            <div>{loading ? 'loading...' 
                : 
                grammar.map(({ id, answer }) => (
                    
                    edit == id && editBoolean == true ? <div>
                                    <EditGrammar {...{callback}} initialValue={answer} id={id}></EditGrammar>
                                </div>
                    :
                    
                    <div style={styles.grammarContainer} className='testStyle' key={id}>
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
