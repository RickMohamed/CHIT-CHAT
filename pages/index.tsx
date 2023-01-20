import Intro from '../comps/Convosection'
import Sidebar from '../comps/Sidebar'
import Details from '../comps/Details'
import Signin from './Signin'
import { auth } from '../firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import Chatpage from '../comps/Chatsection'
import { useContext } from 'react';
import Context from '../contexts/Context';


const Main = () => {

  const { open } = useContext(Context)

const [user] = useAuthState(auth)

console.log(user)

  return ( 
    <>

    {user ? 
    
    <div className="app">

      
      <div className="menu">
      <Sidebar/>
      </div>

 
      <div className="menu">
      <Details/>
      </div>


      <div className={`${open ? 'sections': 'sectionss'}`}>
        <Chatpage/>
      </div>

      
    </div> 

    


    :<div className="signin">
        <Signin/>
    </div>}
    

    
    </>
   );
}
 
export default Main;