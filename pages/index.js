import React from 'react'
import Link from "next/link";
import {useRouter} from "next/router";

export default function Home() {

    const router = useRouter();

    return (
    <div>
      <h2>Hey</h2>
            <div onClick={() => router.push('/numbers')} style={{cursor: 'pointer'}}>
                Go TO NUMBERS PAGE
            </div>
        {/*<Link href={'/numbers'}></Link>*/}
    </div>
  )
}


Home.getInitialProps = () => {
    console.log("HOME INITIAL PROPS");
}
