import './App.css';
import { React, useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
// Imports components.
import Home from './pages/Home';
import Textarea from './pages/Textarea';
import ListGrammar from './pages/ListGrammar';
import AddNewWord from './pages/AddNewWord';
import ListWords from './pages/ListWords';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { AuthContext } from "../src/context/AuthContext";


function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/SignIn" />;
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='SignIn' element={<SignIn />}></Route>
            <Route index element={<RequireAuth> <Home /> </RequireAuth>} />
            <Route path='SignUp' element={<SignUp />}></Route>
            {/* Pages */}
            <Route path='/Textarea' element={<RequireAuth> <Textarea /> </RequireAuth>} />
            <Route path='ListGrammar' element={<RequireAuth> <ListGrammar /> </RequireAuth>} />
            <Route path='AddNewWord' element={<RequireAuth> <AddNewWord /> </RequireAuth>} />
            <Route path='ListWords' element={<RequireAuth> <ListWords /> </RequireAuth>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;