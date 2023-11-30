import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <Editor
                apiKey='ov19oabyq813xxlmgyhlhoqpx18jqzdrd5eq7pxyg0wxsvkt'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue='hi'
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'export','advlist','Preview' , 'lists','pagebreak',
                        'anchor','searchreplace', 'visualblocks', 'code', 'fullscreen','table'
                    ],
                    toolbar: 'Preview pagebreak undo redo' +
                        'bold italic forecolor backcolor fontsize|  alignleft aligncenter ' +
                        'alignright alignjustify table export',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button onClick={log}>Log editor content</button>
        </>
    );
}