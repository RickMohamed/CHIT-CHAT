import styles from '../styles/Styles.module.css'
import { RiSendPlaneFill } from 'react-icons/ri'
import { BsEmojiSmile } from 'react-icons/bs'
import { GiPaperClip } from 'react-icons/gi'
const Textbar = () => {
    return ( 
        <>

        <form className={styles.sendComp}>
        <input className={styles.inputbox} type="text" placeholder='Type messag here...'/>

              <div className={styles.sendicons}>
                <GiPaperClip className={styles.sendicon}/>
               <BsEmojiSmile className={styles.sendicon}/>
               <RiSendPlaneFill className={styles.send}/>
               
               </div> 
            </form>

        </>
     );
}
 
export default Textbar;