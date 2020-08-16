import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {

    const [state, dispatch] = useStateValue();
    const signIn = () => {

        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,

                });
            })
            .catch((error) => {
                alert(error.message);
            });
    };



    return (
        <div className="login">

            <div className="login__container">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="sample-image" />
                <h1>Sign In</h1>
                <p>The Coolest Guy Ever</p>
                <button onClick={signIn}>Sign In with Google</button>
            </div>

        </div>
    );
}

export default Login;
