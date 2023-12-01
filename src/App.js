import './App.css';
import {React,useEffect,useState} from 'react';

import './firebase/config'
import { getFirestore, collection, getDocs } from "firebase/firestore"; 

// Imports components.
import Textarea from './components/Textarea';

function App() {

  let [storedValues, setStoredValues] = useState([]);

  const db = getFirestore();

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "textarea"));
        const temporaryArr = [];
        querySnapshot.forEach((doc) => {
          temporaryArr.push(doc.data());
        });
        setStoredValues(temporaryArr);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
        // Handle error, e.g., set an error state or show a message to the user.
      }
    };
    fetchDataFromFirestore();
  }, [db]);

  return (
    <div>
      {/* <Textarea></Textarea> */}
      {console.log(storedValues)}
    </div>
  );
}


export default App;

