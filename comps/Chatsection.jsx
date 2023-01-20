import styles from '../styles/Styles.module.css'
import { IoIosCall } from 'react-icons/io'
import { BiVideo } from 'react-icons/bi'
import Context from '../contexts/Context'
import { useContext } from 'react'
import Messagessec from './Messagessec'
import Textbar from './Textbar'


const Chatpage = () => {

    const {open, setOpen} = useContext(Context)
    const {title, setTitle} = useContext(Context)

    return ( 
        <div className={styles.chatsec}>
        <div className={styles.title}>
            <h2 onClick={()=>{setOpen(!open)}}>{title}</h2>
            <div className={styles.icons}>
            <IoIosCall className={styles.icon}/>
            <BiVideo className={styles.icon}/>
            </div>
        </div>

        <Messagessec/>
        <Textbar/>
        </div>
     );
}
 
export default Chatpage;