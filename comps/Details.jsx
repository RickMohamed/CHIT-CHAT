import styles from '../styles/Styles.module.css'
import { useContext } from 'react';
import Context from '../contexts/Context';
import { GoLocation } from 'react-icons/go';
import { BsPhoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const Details = () => {

    const {open, setOpen} = useContext(Context)

    return ( 
        <>
        <div className={`${open ? styles.details: styles.detailss}`}>
            <div className={styles.heading}>
            <MdClose className={styles.close} onClick={()=>{setOpen(!open)}}/>

            </div>

            <div className={styles.image}>
                <div className='img'><img src="img.jpg" alt="" /></div>
                <div className={styles.name}><p>Bruce Wayne</p></div>
            </div>
            
                <div className={styles.detaillist}>
                    <div className={styles.detail}>
                        <GoLocation className={styles.iconz}/>
                        <p>New York City, USA</p>
                    </div>
                    <div className={styles.detail}>
                        <BsPhoneFill className={styles.iconz}/>
                        <p>999-999-999</p>
                    </div>
                    <div className={styles.detail}>
                        <AiOutlineMail className={styles.iconz}/>
                        <p>brucewayne@gmail.com</p>
                    </div>
            </div>




            <div className={styles.mediamain}>
                <div className={styles.head}>
                    <h1>Media</h1>
                </div>
            <div className={styles.media}>
                    <div className={styles.imgg}>
                        <img src="img.jpg" alt="" />
                    </div>
                    <div className={styles.imgg}>
                        <img src="img.jpg" alt="" />
                    </div>
                    <div className={styles.imgg}>
                        <img src="img.jpg" alt="" />
                    </div>
            </div>
            </div>



        </div>
        </>
     );
}
 
export default Details;