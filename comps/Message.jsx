import styles from '../styles/Styles.module.css'
import Context from '../contexts/Context';
import { useContext } from 'react';



const Message = () => {

    const {open, setOpen} = useContext(Context)


    return ( 
        <>
         <div className={styles.owner}>
            <div className={styles.messageInfo}>
                <img  src="img.jpg" alt="" />
                <span>just now</span>
            </div>
            <div className={styles.messageContent}>
                <p>Hello</p>
                <img src="rick.jpg" alt="" />
            </div>
         </div>
        </>
     );  
}
 
export default Message;
<>

</>