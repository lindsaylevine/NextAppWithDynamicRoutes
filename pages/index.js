import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h2>Hey</h2>
      <Link href={'/numbers/10'}>GO TO NUMBER 10</Link>
    </div>
  )
}
