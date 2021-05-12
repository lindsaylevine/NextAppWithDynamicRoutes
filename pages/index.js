import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();

    const number1 = (Math.random()*100).toFixed(0);
    const number2 = (Math.random()*100).toFixed(0);
    const number3 = (Math.random()*100).toFixed(0);
    const number4 = (Math.random()*100).toFixed(0);

    const goToNumber = number => {
        router.push(`/numbers/${number.toString()}`)
    }
    return (
    <div>
      <h2>Hey</h2>
          <p onClick={() => goToNumber(number1)}>
              GO TO NUMBER {number1.toString()}
          </p>
        <p onClick={() => goToNumber(number2)}>
            GO TO NUMBER {number2}</p>
        <p onClick={() => goToNumber(number3)}>GO TO NUMBER {number3}</p>
        <p onClick={() => goToNumber(number4)}>GO TO NUMBER {number4}</p>
    </div>
  )
}
