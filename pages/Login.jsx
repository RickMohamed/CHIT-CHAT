import styles from '../styles/Styles.module.css'
import { auth } from '../firebaseConfig'
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';


const Login = () => {
    const [err, setErr]= useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const email = e.target[1].value;
        const password = e.target[2].value;


        try {
          await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
          setErr(true);
        }
      };
    return ( 
        <>
        
        
        <div className={styles.main}>
            <div className={styles.card}>
                <form className={styles.form} onSubmit={handleSubmit}>
                <h1>Chit Chat</h1>
                <p>Login</p>
            <input required type="email" className={styles.input} placeholder='Email'/>
            <input required type="password" className={styles.input} placeholder='Password'/>
            <button className={styles.signinbtn}>Log In</button>
            <p>You don't have an account? <Link href="/">Register</Link></p>
            {err && <span>Something went wrong</span>}
        </form>

        </div>
        </div>
        
        </>
     );
}
 
export default Login;