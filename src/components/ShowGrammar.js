import React from 'react'

export default function ShowGrammar(props) {


  return (
    <div style={styles.grammarContainer} className='testStyle'>
      <div
        style={{
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontSize: '12pt'
        }}
        dangerouslySetInnerHTML={{ __html: props.answer }}
      />
    </div>
  )
}

const styles = {
  grammarContainer: {
      border: '2px solid black',
      margin: '10px',
  }
};