import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Context from '../contexts/Context'
import { useState } from 'react';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebaseConfig";


export default function App({ Component, pageProps }: AppProps) {

  const[open, setOpen] = useState(true)

  const[title, setTitle] = useState('')


  // const [currentUser, setCurrentUser] = useState({});

  // useEffect(() => {
  //   const unsub = onAuthStateChanged(auth, (user) => {
  //     setCurrentUser(user);
  //     console.log(user);
  //   });

  //   return () => {
  //     unsub();
  //   };
  // }, []);



  return (
    <div className='contents'>
      <Context.Provider value={ {open, setOpen, title, setTitle }}>
        <Component {...pageProps} />
      </Context.Provider>
    </div>
  )
}
