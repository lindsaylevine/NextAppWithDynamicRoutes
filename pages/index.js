import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();

    const numbers = Array(3).fill(1).map(() => (Math.random()*100).toFixed(0));

    const goToNumber = number => {
        router.push(`/numbers/${number.toString()}`)
    }
    return (
    <div>
      <h2>Hey</h2>

        {
            numbers.map( num => (
                <div onClick={() => { console.log("GO TO NUMBER EXECUTED: "); goToNumber(num); }}>
                    <Link href={`/numbers/${num}`} locale={router.locale}>
                        <p> Go To {num}</p>
                    </Link>
                </div>
            ))
        }
    </div>
  )
}
