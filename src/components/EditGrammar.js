import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default function EditGrammar(props) {

    const [textarea, setTextarea] = useState(props.initialValue ?? '');
    const [loadingAfterPost, setLoadingAfterPost] = useState(true)

    const editTextarea = (e, id, textareaa) => {
        e.preventDefault()
        setLoadingAfterPost(false)
        axios.post('http://localhost:8081/edit-textarea', {
            answer: textareaa,
            id: id
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setTextarea('')
        props?.callback(false)
        setLoadingAfterPost(true)
    }


    // tinyMCE Editor things.
    useEffect(() => setTextarea(props.initialValue ?? ''), [props.initialValue]);
    const editorRef = useRef(null);

    return (
        <div className='container'>
            {loadingAfterPost ?
                <>
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
                    <Button variant="warning" onClick={(e) => editTextarea(e, props.id, textarea)}>update</Button>
                </>
                :
                <div>loading...</div>
            }
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
