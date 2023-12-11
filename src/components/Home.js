import { React} from 'react';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import AuthDetails from './AuthDetails';

function Home() {

    return (
        <div className='container'>
            <SignIn></SignIn>
            <SignUp></SignUp>
            <AuthDetails></AuthDetails>

        </div>

    );
}

export default Home;

