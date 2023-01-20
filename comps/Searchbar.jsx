import styles from '../styles/Styles.module.css';


const Search = () => {
    return ( 
        <>
        <input type="text" className={styles.search} placeholder='Find user here...' />
        </>
     );
}
 
export default Search;