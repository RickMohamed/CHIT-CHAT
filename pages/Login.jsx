import styles from '../styles/Styles.module.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebaseConfig'
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore'
// import { useNavigate, Link } from "react-router-dom";


const Signin = () => {
    const [err, setErr]= useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].value;


        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);
      
            //Create a unique image name
    
            const storageRef = ref(storage, displayName);
      
            await uploadBytesResumable(storageRef, file).then(() => {
              getDownloadURL(storageRef).then(async (downloadURL) => {
                try {
                 



                  await updateProfile(res.user, {
                    displayName,
                    photoURL: downloadURL,
                  });
                 


                  await setDoc(doc(db, "users", res.user.uid), {
                    uid: res.user.uid,
                    displayName,
                    email,
                    photoURL: downloadURL,
                  });
      
                 
                  await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");
                        } catch (err) {
                        console.log(err);
                        setErr(true);
                        setLoading(false);
                        }

              });

              
            }
            
            );
          } catch (err) {
            setErr(true);
            
          }

    }


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
            {err && <span>Something went wrong</span>}
        </form>
        </div>
        </div>
        
        </>
     );
}
 
export default Signin;