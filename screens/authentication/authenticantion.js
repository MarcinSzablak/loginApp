import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "../../firebase"

const signUp = (mail, password, name) =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, mail, password)
    .then((userCredential) => {
        const user = userCredential.user;
        user.displayName = name
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

export { signUp };