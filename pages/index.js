import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
    const number1 = (Math.random()*100).toFixed(0);
    const number2 = (Math.random()*100).toFixed(0);
    const number3 = (Math.random()*100).toFixed(0);
    const number4 = (Math.random()*100).toFixed(0);

    return (
    <div>
      <h2>Hey</h2>
      <Link href={`/numbers/${number1}`}>
          <p>
              GO TO NUMBER {number1.toString()}
          </p>
           </Link>
        <Link href={`/numbers/${number2}`}><p>GO TO NUMBER {number2}</p></Link>
        <Link href={`/numbers/${number3}`}><p>GO TO NUMBER {number3}</p></Link>
        <Link href={`/numbers/${number4}`}><p>GO TO NUMBER {number4}</p></Link>
    </div>
  )
}
