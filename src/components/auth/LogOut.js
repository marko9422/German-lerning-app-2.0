import React, {useContext,useEffect,useState} from "react";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import Button from 'react-bootstrap/Button';


const SignIn = () => {

    const [authUser, setAuthUser] = useState(null)
    const { dispatch } = useContext(AuthContext)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthUser(user.email);
          } else {
            setAuthUser(null);
          }
        });
    
        return () => {
          listen();
        };
      }, []);

        
    return (
        <>
        <p>{`Signed In as ${authUser}`}</p>
        <Button variant="danger" onClick={() => dispatch({ type: "LOGOUT" })}>Logout</Button>
        </>
    );
};

export default SignIn;
