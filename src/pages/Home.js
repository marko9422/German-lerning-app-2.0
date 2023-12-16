import { React, useEffect } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from '../components/NavbarMenu';


function Home() {

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
                console.log("uid", uid)
            } else {
                // User is signed out
                // ...
                console.log("user is logged out")
            }
        });

    }, [])

    return (
        <>
        <NavbarMenu></NavbarMenu>
        <p>home</p>
        </>
    );
}

export default Home;

