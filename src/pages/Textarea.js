import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore';
import NavbarMenu from '../components/NavbarMenu';
import Button from 'react-bootstrap/Button';
import useGetUserFromLocalStore from '../hooks/useGetUserFromLocalStore';
import axios from 'axios';

export default function Textarea({ initialValue }) {

    const [userFromLocalStorage, emailWhichIsAsAGuess] = useGetUserFromLocalStore()
    const [textarea, setTextarea] = useState(initialValue ?? '');
    const [loadingAfterPost, setLoadingAfterPost] = useState(true)

    // const saveIntoFirestore = async () => {
    //     if (userFromLocalStorage.email !== emailWhichIsAsAGuess){
    //         setLoadingAfterPost(false)
    //         await addDoc(userCollectionRef, { answer: textarea, score:10000,visible:true });
    //         setTextarea('')
    //         setLoadingAfterPost(true)
    //     } else {
    //         alert('Sorry, you do not have permission to save/edit data. You are currently in guest mode.');
    //     }
    // }


    const saveIntoFirestore = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8081/Textarea', {
            answer: textarea,
            score: 10000,
            visible: true
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        setTextarea('')
    }


    // tinyMCE Editor things.
    useEffect(() => setTextarea(initialValue ?? ''), [initialValue]);
    // const userCollectionRef = collection(db, 'textarea')
    const editorRef = useRef(null);

    return (
        <>
            <NavbarMenu></NavbarMenu>
            <div className='container'>
                {loadingAfterPost ?
                    <>
                        <Editor
                            initialValue={initialValue}
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
                                    'italic bold forecolor backcolor fontsize| alignleft aligncenter ' +
                                    'alignright alignjustify table export lineheight',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:12pt; }',
                            }}
                        />
                        <Button variant="primary" onClick={saveIntoFirestore}>save</Button>
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
                ></div>
            </div>
        </>
    );

}
