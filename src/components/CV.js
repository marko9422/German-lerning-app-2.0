import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './styles.css'
import videoGif from '../images/video.gif'
import lavinoffka1 from '../images/lavinoffka1.png'
import lavinoffka2 from '../images/lavinoffka2.png'
import lavinoffka3 from '../images/lavinoffka3.png'
import germanapp1 from '../images/germanapp1.png'
import germanapp2 from '../images/germanapp2.png'
import germanapp3 from '../images/germanapp3.png'
import ApiComponent from './ApiComponent';

export default function CV() {

    const [openGallery, setOpenGallery] = useState(false)
    const [pictureInGallery, setPictureInGallery] = useState('')

    const openPicture = (event) => {
        setPictureInGallery(event.target.src)
        if (window.innerWidth > 991) {
            setOpenGallery(true)

        }
        console.log(window.innerWidth)
    }
    const closePicture = () => {
        setOpenGallery(false)
    }

    // Create animation. useEffec create delay to add class show which create fadein animation.
    useEffect(() => {
        if (openGallery) {
            const timeoutId = setTimeout(() => {
                document.querySelector('.div').classList.add('show');
            }, 50);

            return () => clearTimeout(timeoutId);
        }
    }, [openGallery]);
    
    return (
        <>
            {openGallery ? <div onClick={closePicture} className='div' style={{ backgroundImage: `url(${pictureInGallery})` }}>
                <p className='closetext'>Click to close.</p>
            </div> : null}

            <Container className='cv'>
                <Row style={{ textAlign: 'center' }}>
                    <Col>
                        <h2>MARKO ŠARČEVIČ</h2>
                    </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                    <Col >
                        <h4>PROJECTS</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className='project_section' >
                        <h4 className='project_name' style={{ textAlign: 'center' }}>German learning web app</h4>
                        <div>
                            <p>
                                You can logIn on the top. username: <span className='technology_word'>test@test.com</span> password: <span className='technology_word'>test123</span>.
                                App contain Auth system from firebase, TinyMCE: WYSIWYG Editor to create Tables and texts, form to add words and examples.
                                Tables, texts, words are editable,contain score system and example sentences.
                            </p>
                            <p>
                                Created personal German web aplication that I am using to learn german language. I used <span className='technology_word'>ReactJS</span> as
                                frontend, <span className='technology_word'>PHP</span> to comunicate with <span className='technology_word'>mySQL</span> database.
                            </p>
                            <p>
                                Created second version of German web aplication frontend in <span className='technology_word'>ReactJS</span>. Intead of
                                mySQL I am using <span className='technology_word'>firestore</span> from google as a database for data and authentication
                                system to register/login.Style is created mostly with <span className='technology_word'>Bootstrap</span> but in not 100% finished because I am adding more features and I am planing change database.
                            </p>
                            <p>
                                <a target='_blank' href='https://github.com/marko9422/German-lerning-app-2.0'>Source code</a>
                            </p>
                        </div>

                    </Col>
                </Row>
                <Row className='lavinoffka_gallery'>
                    <Col lg="4">
                        <img className='lavinoffka_picture' src={germanapp1} alt="Image 1" onClick={openPicture} />
                        <p>TinyMCE: WYSIWYG Editor</p>
                    </Col>
                    <Col lg="4">
                        <img className='lavinoffka_picture' src={germanapp2} alt="Image 2" onClick={openPicture} />
                    </Col>
                    <Col lg="4">
                        <img className='lavinoffka_picture' src={germanapp3} alt="Image 3" onClick={openPicture} />
                        <p>Firestore database</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='project_section'>
                        <h4 className='project_name' style={{ textAlign: 'center' }}>www.lavinoffka.cz</h4>
                        <div>
                            <p>
                                Created <span className='technology_word'>e-commerce + blog website</span> in <span className='technology_word'>wordpress</span> with blocksy theme and WooCommerce lavinoffka.cz.
                                Added Product Gallery Slider for WooCommerce,Speed Optimizer,Elementor.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className='lavinoffka_gallery'>
                    <Col lg="4">
                        <img className='lavinoffka_picture' src={lavinoffka1} onClick={openPicture} alt="Image 1" />
                    </Col>
                    <Col lg="4">
                        <img className='lavinoffka_picture' src={lavinoffka2} onClick={openPicture} alt="Image 2" />
                    </Col>
                    <Col lg="4">
                        <img className='lavinoffka_picture' src={lavinoffka3} onClick={openPicture} alt="Image 3" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='project_section'>
                        <h4 className='project_name' style={{ textAlign: 'center' }}>www.jakubhanzl.com</h4>
                        <div >
                            <p>
                                Created presentation website page in <span className='technology_word'>HTML, CSS ,
                                    JavaScript, jQuery</span>.
                            </p>
                        </div>
                    </Col>
                    <Col style={{ textAlign: 'center', margin: '0 auto' }}>
                        <img className='gif_video' src={videoGif}></img>
                    </Col>
                </Row>
                <Row>
                    <Col className='project_section'>
                        <h4 className='project_name' style={{ textAlign: 'center' }}>API </h4>
                        <div >
                            <p>
                                Created <span className='technology_word'>ReactJS</span> component where I fetch <span className='technology_word'>API</span> from Urban Dictionary.
                                (Crowdsourced English-language online dictionary for slang words and phrases). You can type some word to the input and press button for result.
                            </p>
                            <ApiComponent></ApiComponent>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='project_section'>
                        <h4 className='project_name' style={{ textAlign: 'center' }}>Python / selenium </h4>
                        <div >
                            <p>
                                With <span className='technology_word'>python selenium</span>  I writed script to scrappe data from betting sites and saved data into <span className='technology_word'>SQL</span>  database. Then I compared data and try to find out what are the differences between
                                companies.
                            </p>
                            <p>
                                <a target='_blank' href='https://github.com/marko9422/betArbitrage'>Source code</a>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='project_section'>
                        {/* <h4 style={{ textAlign: 'center' }}>Python / selenium </h4> */}
                        <div >
                            <p>
                                I am interested in Laravel PHP framework. Therefore I am trying to migrate my database from Firestore to MySQL and use Laravel framework as a back-end tehnology.
                                I am also interested in React Native to build mobile app. Currently I am working on the app where I am using Typescrit, React Native, Laraval and MySQL. I am also interested into worrdpres
                                and e-commerce.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
