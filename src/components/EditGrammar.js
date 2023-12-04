import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { db } from '../firebase/config'
// Imports components.
import { collection,updateDoc,doc } from 'firebase/firestore';

export default function EditGrammar( props ) {

    const [textarea, setTextarea] = useState(props.initialValue ?? '');
    
    const EditIntoFirestore = async (id, textarea) => {
        const textareaDoc = doc(db,'textarea' , id)
        const updateTextarea = {answer: textarea}
        await updateDoc(textareaDoc, updateTextarea);
        setTextarea('')
    }
    
    // tinyMCE Editor things.
    const userCollectionRef = collection(db, 'textarea')
    useEffect(() => setTextarea(props.initialValue ?? ''), [props.initialValue]);
    const editorRef = useRef(null);

    return (
        <div className='container'>
            <p>test router textarea</p>
            <Editor
                initialValue={props.initialValue}
                value={textarea}
                onEditorChange={(newValue, editor) => setTextarea(newValue)}
                apiKey='ov19oabyq813xxlmgyhlhoqpx18jqzdrd5eq7pxyg0wxsvkt'
                onInit={(evt, editor) => editorRef.current = editor}
                init={{
                    height: 500,
                    menubar: false,
                    line_height_formats: '0.5 1 1.2 1.4 1.6 2 5',
                    plugins: [
                        'export', 'advlist', 'preview', 'lists', 'pagebreak',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'table'
                    ],
                    toolbar: 'preview pagebreak undo redo' +
                        'italic bold  forecolor backcolor fontsize|  alignleft aligncenter ' +
                        'alignright alignjustify table export lineheight',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:12pt; }',
                }}
            />
            <button onClick={() => EditIntoFirestore(props.id,textarea)}>update</button>

            <div
                style={{
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: '12pt'
                }}
                dangerouslySetInnerHTML={{ __html: textarea }}
            />


        </div>
    );
}
