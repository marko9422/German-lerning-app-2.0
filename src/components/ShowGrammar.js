import React from 'react'

export default function ShowGrammar(props) {
  return (
    <div key={props.id}>
    <p>{props.randomlengthOfGrammar}</p>
    {/* <p>{currentlyEditing}</p>
    <p>{index}</p>
    <div style={styles.grammarContainer} className='testStyle'>
        <div
            style={{
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontSize: '12pt'
            }}
            dangerouslySetInnerHTML={{ __html: answer }}
        />
    </div>
    <p>{score}</p>
    <button onClick={() => editGrammar(id)}>EDIT</button>
    <CorrectGrammarButton id={id} score={score} /> */} 
</div>
  )
}
