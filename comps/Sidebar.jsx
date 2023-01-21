import styles from '../styles/Styles.module.css';
import Menutitle from './Menutitle';
import Link from 'next/link';
import { useContext } from 'react';
import Context from '../contexts/Context';
import Search from './Searchbar';


const Sidebar = () => {

const names = ['Tommas Shelby', 'Harry kane', 'Bruce Wayne', 'Karim Benzema', 'Tony Stark', 'Ben Shapiro']

const {title, setTitle} = useContext(Context);
const {open, setOpen} = useContext(Context);

const settitle=(e)=>(
    setTitle('Bruce Wayne')
)

    return ( 
        <>
        <div className="main">
        <div className={styles.menuu}>

            <Menutitle/>
            <Search/>

            {
                names.map((name)=>(
                    <div className={styles.chats} key={name} onClick={settitle}>
                    <Link  href={'/'} className={styles.link}>
                    <img className={styles.chatsimg} src="img.jpg" alt="img" onClick={()=>{setOpen(!open)}}/>
                    <li>
                    <a href="#intro">{name}</a>
                    <p>{name}</p>
                    </li>
                    </Link>
                    
                    
               </div>
                ))
            }

        </div>

        

        </div>
        </>
     );
}
 
export default Sidebar;