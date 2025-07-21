import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import axios from "axios";

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();
  // create user

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Sign in user

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with Google

  const singInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Facebook login

  const loginWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, faceBookProvider);
  };

  //   observer
  //   sign Out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        return axios.post(
          "https://jobsy-server.vercel.app/logout",
          {},
          {
            withCredentials: true,
          }
        );
      })
      .then((res) => {
        console.log("logout successfull", res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("https://jobsy-server.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((result) => {
            console.log("login token", result.data);
            setLoading(false);
          });
      }
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const firebaseInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    singInWithGoogle,
    loginWithFacebook,
  };
  return (
    <AuthContext.Provider value={firebaseInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseProvider;
