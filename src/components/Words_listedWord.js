import { React, useRef } from 'react'
import './styles.css'

export default function Words_listedWord(props) {

    const refEnglish = useRef(null)
    const refEnglishWord = useRef(null)
    const refGerman = useRef(null)
    const refGermanWord = useRef(null)

    const showEnglish = () => {
        refEnglish.current.style.backgroundColor = 'rgb(187, 196, 199)';
        refEnglishWord.current.style.display = 'block';
    };
    const showGerman = () => {
        refGerman.current.style.backgroundColor = 'rgb(187, 196, 199)';
        refGermanWord.current.style.display = 'block';
    };

    function myFunction() {
        const popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }

    return (
        <div>
            <div className="popup" onClick={() => myFunction()}>Click me to toggle the popup!
                <span className="popuptext" id="myPopup">A Simple Popup!</span>
            </div>
            {props.chooseListedLanguage === 'english' ? (
                <>
                <p>{props.chooseListedLanguage}</p>
                <div ref={refEnglish} onClick={showEnglish} className='div_style' style={{ backgroundColor: 'rgb(187, 196, 199)' }}>
                    <p ref={refEnglishWord} className=''>{props.english}</p>
                </div>
                <div ref={refGerman} onClick={showGerman} className='div_style' style={{ backgroundColor: 'rgb(43, 167, 215)' }}>
                    <p ref={refGermanWord} className='hidden'> {props.german}</p>
                </div>

                <div>{props.englishExample}</div>
                <div>{props.germanExample}</div>
                </>
            ) : (
                <>
                <p>{props.chooseListedLanguage}</p>
                <div ref={refGerman} onClick={showGerman} className='div_style' style={{ backgroundColor: 'rgb(187, 196, 199)'}} >
                    <p ref={refGermanWord} className=''> {props.german}</p>
                </div>
                <div ref={refEnglish} onClick={showEnglish} className='div_style' style={{ backgroundColor: 'rgb(43, 167, 215)' }}>
                    <p ref={refEnglishWord} className='hidden'>{props.english}</p>
                </div>

                <div>{props.germanExample}</div>
                <div>{props.englishExample}</div>
                </>
            )}
        </div>
    )
}
