import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import store from "../store";

export const signup = ({ firstName, lastName, email, password1, password2, address }, onSuccess, onFaiure) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password1)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: firstName + " " + lastName,
              })
            console.log("userSignedInSucessfully")
            // ...
            if (onSuccess) {
                onSuccess();
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("userDidNotSignInSucessfully")
            // ..
            if (onFaiure) {
                onFaiure(error.message);
            }
        });
}
export const login = ({ email, password }, onSuccess, onFaiure) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("userSignedInSuccessfully")
            store.user.set({fullName: user.displayName, email: user.email, emailVerified: user.emailVerified, isAuthenticated: true, uid:user.uid})
            // ...
            if (onSuccess) {
                onSuccess();
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("userDidNotSignInSuccessfully")
            // ..
            if (onFaiure) {
                onFaiure(error.message);
            }
        });
}
export const forgotpassword = ({ email }, onSuccess, onFaiure) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            //Password reset email sent!
            //..
            console.log("emailSent")
            // ...
            if (onSuccess) {
                onSuccess();
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("emailNotSent")
            // ..
            if (onFaiure) {
                onFaiure(error.message);
            }
        })
}
