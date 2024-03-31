import {createContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {app} from "../firebase/fire.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [lodear, setLodear] = useState(true);
  // create new user
  const createUser = (email, password) => {
    setLodear(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signin user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () =>{
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      console.log(currentUser);
      setLodear(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    lodear,
    createUser,
    login,
    logOut
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
