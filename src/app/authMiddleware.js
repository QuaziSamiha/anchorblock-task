import { clearError, setError, setLoading, setUser } from "../auth/authSlice";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const signUp = (email, password, location, navigate) => (dispatch) => {
  
  dispatch(setLoading(true));
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(email);
      console.log(userCredential);
      dispatch(setUser(email));
      dispatch(clearError());
      navigate(location.state?.from.pathname, { replace: true });
      console.log("Sign-up successful!");
    })
    .catch((error) => {
      dispatch(setError(error.message));
      console.error("Sign-up error:", error.message);
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

export const signIn = (email, password) => (dispatch) => {
  dispatch(setLoading(true));

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      dispatch(setUser(userCredential.user));
      dispatch(clearError());
      console.log("Sign-in successful!");
    })
    .catch((error) => {
      dispatch(setError(error.message));
      console.error("Sign-in error:", error.message);
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};

export const userSignOut = () => (dispatch) => {
  dispatch(setLoading(true));

  signOut(auth)
    .then(() => {
      dispatch(setUser(null));
      dispatch(clearError());
      console.log("Sign-out successful!");
    })
    .catch((error) => {
      dispatch(setError(error.message));
      console.error("Sign-out error:", error.message);
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
};
