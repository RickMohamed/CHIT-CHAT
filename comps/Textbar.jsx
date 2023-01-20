import styles from '../styles/Styles.module.css'
import { AiOutlineSend } from 'react-icons/ai'
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
               <AiOutlineSend className={styles.send}/>
               
               </div> 
            </form>

        </>
     );
}
 
export default Textbar;