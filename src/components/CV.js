import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './styles.css'
import videoGif from '../images/video.gif'
import ApiComponent from './ApiComponent';

export default function CV() {
    return (
        <Container>
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
                    <h4 style={{ textAlign: 'center' }}>German learning web app</h4>
                    <div>
                        <p>
                            Created personal German web aplication that I am using to learn german language. I used <span className='technology_word'>ReactJS</span> as
                            frontend, <span className='technology_word'>PHP</span> to comunicate with <span className='technology_word'>mySQL</span> database.
                        </p>
                        <p>
                            Created second version of German web aplication frontend in <span className='technology_word'>ReactJS</span>. Intead of
                            mySQL I am using <span className='technology_word'>firestore</span> from google as a database for data and authentication
                            system to register/login.Style is created mostly with <span className='technology_word'>Bootstrap</span>.
                        </p>
                        <p>
                            You can logIn on the top. username: <span className='technology_word'>test@test.com</span> password: <span className='technology_word'>test123</span>.
                            App contain Auth system from firebase, TinyMCE: WYSIWYG Editor to create Tables and texts, form to add words and examples.
                            Tables, texts, words are editable,contain score system and example sentences.
                        </p>
                        <p>
                            <a target='_blank' href='https://github.com/marko9422/German-lerning-app-2.0'>Source code</a>
                        </p>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col className='project_section'>
                    <h4 style={{ textAlign: 'center' }}>www.lavinoffka.cz</h4>
                    <div>
                        <p>
                            Created <span className='technology_word'>e-commerce + blog website</span> in <span className='technology_word'>wordpress</span> with blocksy theme and WooCommerce lavinoffka.cz.
                            Added Product Gallery Slider for WooCommerce,Speed Optimizer,Elementor.
                        </p>

                    </div>

                </Col>
            </Row>
            <Row>
                <Col className='project_section'>
                    <h4 style={{ textAlign: 'center' }}>www.jakubhanzl.com</h4>
                    <div >
                        <p>
                            Created presentation website page in <span className='technology_word'>HTML, CSS ,
                                JavaScript, jQuery</span>.
                        </p>
                        <div style={{ textAlign: 'center', margin: '0 auto' }}>
                            <img className='gif_video' src={videoGif}></img>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='project_section'>
                    <h4 style={{ textAlign: 'center' }}>API </h4>
                    <div >
                        <p>
                            Created <span className='technology_word'>ReactJS</span> component where I fetch <span className='technology_word'>API</span> from Urban Dictionary.
                            (Crowdsourced English-language online dictionary for slang words and phrases). You can type some word to the input and press button for result.
                        </p>
                        <ApiComponent></ApiComponent>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
