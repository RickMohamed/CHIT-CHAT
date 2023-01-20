import { useEffect, useState } from 'react';
import styles from '../styles/Styles.module.css'
import colref from '../firebaseConfig'
import { query, orderBy, limit, onSnapshot, doc } from "firebase/firestore";
import { async } from '@firebase/util';
import Textbar from './Textbar'
import Messagessec from './Messagessec'

const Messagespage = () => {

    
// const q = query(colref, orderBy('createdAt'), limit(50));


// onSnapshot(q, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(JSON.stringify(doc.data())); 
//     });
//   });


// useEffect((onSnapshot(colref, snapshot))=>{
    
//         console.log("Current data: ", snapshot.doc.data());
    
// }, [])



// useEffect(()=>{
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const cities = [];
//         querySnapshot.forEach((doc) => {
//             cities.push(doc.data());
//         }); console.log(cities)
//       });
// }, [])


// useEffect(()=>{
//     q.onSnapshot(snapshot =>{
//         setMessages(snapshot.docs.map(doc => doc.data()))
//     })
// }, [])

    return ( 
        <>
        
        <div className={styles.intro} id='intro'>
          
        <Messagessec/>


            {

useEffect(()=>{
    
    const getData = async ()=>{
        const querySnapshot = await getDocs(colref);
    querySnapshot.forEach((doc) => {
      console.log(JSON.stringify(doc.data()));
    });
    }
    })

            
            /* {messages.map(({ id, text, photoURL })=>(
            
            <div key={id}>
                <img src={photoURL} alt="" />
                <p>{text}</p>
            </div>
        ))} */}

            <Textbar/>
            
        </div>
       
        </>
     );
}
 
export default Messagespage;
