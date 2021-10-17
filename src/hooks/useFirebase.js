import initApp from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

initApp();
const useFirebase = () => {

    const history = useHistory();

    const [user, setUser] = useState({});

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const singInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                history.push('/checkout');
            })
            .catch(error => {
                console.log(error.message);
            });

    };

    const logOut = () => {
        signOut(auth).then(() => {

        });
    };

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });

    }, []);

    return {
        singInWithGoogle,
        user,
        logOut
    };

};

export default useFirebase;