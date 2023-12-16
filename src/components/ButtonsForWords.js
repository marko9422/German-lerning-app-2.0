import { db } from '../firebase/config'
import { updateDoc, doc } from 'firebase/firestore';
import './styles.css';



export default function ButtonsForWords(props) {

    const correct = async () => {
        if (props.chooseListedLanguage == 'english'){
            const textareaDoc = doc(db, 'words', props.id)
            const updateTextarea = { englishScore: props.englishScore + 1 }
            await updateDoc(textareaDoc, updateTextarea);
        } else {
            const textareaDoc = doc(db, 'words', props.id)
            const updateTextarea = { germanScore: props.germanScore + 1 }
            await updateDoc(textareaDoc, updateTextarea);
        }
        const targetDiv = document.querySelector('.correctWrong');
        targetDiv.classList.add("unclicable");
    }

    const wrong = async () => {
        if (props.chooseListedLanguage == 'english'){
            const textareaDoc = doc(db, 'words', props.id)
            const updateTextarea = { englishScore: props.englishScore - 1 }
            await updateDoc(textareaDoc, updateTextarea);
        } else {
            const textareaDoc = doc(db, 'words', props.id)
            const updateTextarea = { germanScore: props.germanScore - 1 }
            await updateDoc(textareaDoc, updateTextarea);
        }
        const targetDiv = document.querySelector('.correctWrong');
        targetDiv.classList.add("unclicable");
    }

    return (
        <>
        <div className='correctWrong'>
            <button onClick={correct} >correct</button>
            <button onClick={wrong} >wrong</button>
        </div> 
        </>
    )
}

