import { React } from 'react';

import useFetchGrammar from '../hooks/useFetchGrammar';

export default function ListGrammar() {

    const { loading, grammar } = useFetchGrammar()

    return (
        <div className='container'>
            <div>{loading ? 'loading...' : 'grammar'}
                {grammar.map(({ id, answer }) => (
                    <div style={styles.grammarContainer} className='testStyle' key={id}>
                        <div
                            style={{
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                fontSize: '12pt'
                            }}
                            dangerouslySetInnerHTML={{ __html: answer }}
                        />
                    </div>
                ))}
            </div>


            {/* {console.log(data.asnwer)} */}
        </div>
    )


}

const styles = {
    grammarContainer: {
        border: '2px solid black',
        margin: '10px',
    }
};
