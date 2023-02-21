import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "../../firebase"

const signUp = (mail, password) =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, mail, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

export { signUp };