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

    function PopUpEnglish() {
        const popup = document.getElementById("myPopupEnglish");
        popup.classList.toggle("show");
      }
    function PopUpGerman() {
        const popup = document.getElementById("myPopupGerman");
        popup.classList.toggle("show");
      }

    return (
        <div>
            {props.chooseListedLanguage === 'english' ? (
                <>
                <p>{props.chooseListedLanguage}</p>
                <div ref={refEnglish} onClick={showEnglish} className='div_style' style={{ backgroundColor: 'rgb(187, 196, 199)' }}>
                    <p ref={refEnglishWord} className=''>{props.english}</p>
                </div>
                <div ref={refGerman} onClick={showGerman} className='div_style' style={{ backgroundColor: 'rgb(43, 167, 215)' }}>
                    <p ref={refGermanWord} className='hidden'> {props.german}</p>
                </div>

                <div className="popup" onClick={() => PopUpEnglish()}>
                    English
                    <span className="popuptext" id="myPopupEnglish">{props.englishExample}</span>
                </div>
                <div className="popup" onClick={() => PopUpGerman()}>
                    German
                    <span className="popuptext" id="myPopupGerman">{props.germanExample}</span>
                </div>
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

                <div className="popup" onClick={() => PopUpGerman()}>
                    German
                    <span className="popuptext" id="myPopupGerman">{props.germanExample}</span>
                </div>
                <div className="popup" onClick={() => PopUpEnglish()}>
                    English
                    <span className="popuptext" id="myPopupEnglish">{props.englishExample}</span>
                </div>
                </>
            )}
        </div>
    )
}
