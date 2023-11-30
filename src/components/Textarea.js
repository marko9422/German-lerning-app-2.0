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
        <div className={styles.editor}>
            <Editor
                apiKey='ov19oabyq813xxlmgyhlhoqpx18jqzdrd5eq7pxyg0wxsvkt'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue='hi'
                init={{
                    height: 500,
                    menubar: false,
                    line_height_formats: '0.5 1 1.2 1.4 1.6 2 5',
                    plugins: [
                        'export','advlist','preview' , 'lists','pagebreak',
                        'anchor','searchreplace', 'visualblocks', 'code', 'fullscreen','table'
                    ],
                    toolbar: 'preview pagebreak undo redo' +
                        'italic bold  forecolor backcolor fontsize|  alignleft aligncenter ' +
                        'alignright alignjustify table export lineheight',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; line-heigth:20px; }'
                }}
            />
            <button onClick={log}>Log editor content</button>
        </div>
    );
}

const styles = {
    editor: {
        width: '800px', 
    }
};