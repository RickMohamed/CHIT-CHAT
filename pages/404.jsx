import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Link from 'next/link';

const Notfound = () => {

const router = useRouter()

    
useEffect(()=>{
    setTimeout(()=>{
        router.push('/ ')
    }, 3000)
}, []) 
    
    return ( 
        <>
        <Head>
            <title>Page Not Found</title>
        </Head>


            <div className="not-found">
                <h1 className="h11">Oops, page not found!</h1>
                <h4>Go back to <Link href="/">HomePage</Link></h4>
            </div>
        </>
     );
}
 
export default Notfound;