import './App.css';
import { React} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// Imports components.
import Home from './components/Home';
import Textarea from './components/Textarea';
import FetchDataFromFirebase from './components/FetchDataFromFirebase'


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container >
            <Navbar.Brand as={Link} to='/'>home</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link  as={Link} to='/Textarea'>textarea</Nav.Link>
                <Nav.Link  as={Link} to='/FetchDataFromFirebase'>FetchDataFromFirebase</Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
        <Route path='/Home' element={< Home/>} />
        <Route path='/Textarea' element={< Textarea/>} />
        <Route path='/FetchDataFromFirebase' element={< FetchDataFromFirebase/>} />
    </Routes>
      </BrowserRouter>
    </>
  );
}

      export default App;