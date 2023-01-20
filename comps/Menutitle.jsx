import { auth } from '../firebaseConfig'
import styles from '../styles/Styles.module.css'

const Menutitle = () => {
    return ( 
        <div className={styles.menuhead}>
            <div className={styles.chatname}>
                <h1>Chit Chat</h1>
            </div>
        <div className={styles.profile}>
            <button className={styles.signupbtn} onClick={()=>{auth.signOut()}}>Sign Out</button>
        </div>
        </div>
     );
}
 
export default Menutitle;