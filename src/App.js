import './App.css';
import {React, useState} from 'react';


function App() {

  const [oneData, setOneData] = useState({question: '', answer: ''})
  const [data, setData] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const newFormData = {questions: oneData.question,answer: oneData.answer,id: new Date().getTime()};
    
    setData((prevData) => {
      return [...prevData, newFormData];
    });
    setOneData({question: '', answer: ''})
  };


  const formChange = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    setOneData({...oneData, [name]: value})
  }


  return (
    <div>
      <form style={styles.container}>
        <input
          type='text'
          name='question'
          onChange={formChange}
          value={oneData.question}
          placeholder='Name'
        ></input>
        <textarea
          name='answer'
          onChange={formChange}
          value={oneData.answer}
          rows="25" cols="100"
        ></textarea>
        <input
          onClick={formSubmit}
          style={styles.button}
          type='submit'
          value='submit'
        ></input>
      </form>

      {data.map((oneDatafromArray, index) => {
        const {questions,answer} = oneDatafromArray

        return (
          <div key={index}>
            <h3>{questions}</h3>
            <p style={styles.answer}>{answer}</p>
          </div>
        );
      })}

    </div>
  );
}

const styles = {
  container:{
    maxWidth: '1200px',
    height: "400px",
    margin: '0 auto',
    background:'#f5efe9'
  },
  button: {
    color: 'red', 
  },
  answer:{
    whiteSpace: 'pre',
  }
};

export default App;

