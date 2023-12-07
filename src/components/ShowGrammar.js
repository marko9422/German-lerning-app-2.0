import React from 'react'

export default function ShowGrammar(props) {

  const editGrammar = (id) => {
    setEdit(id)
    setEditorToeditCurrentGrammar(true)
    setCurrentlyEditing(randomlengthOfGrammar)
}

  return (
      <div key={props.id}>
        <div style={styles.grammarContainer} className='testStyle'>
          <div
            style={{
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontSize: '12pt'
            }}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
        <button onClick={() => editGrammar(id)}>EDIT</button>
        <CorrectGrammarButton id={id} score={score} />
      </div>

  )
}
const styles = {
  grammarContainer: {
      border: '2px solid black',
      margin: '10px',
  }
};
