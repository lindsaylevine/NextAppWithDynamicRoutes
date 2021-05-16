import React from 'react'
import {useRouter} from "next/router";
import Link from "next/link";

const Numbers = () => {
    const router = useRouter();

    const numbers = Array(3).fill(1).map(() => (Math.random()*100).toFixed(0));

    const goToNumber = number => {
        console.log("WILL ROUTET TO NUMER");
        // router.push(`/numbers/${number.toString()}`)
        router.push({ pathname: '/numbers/[id]', query: { id: number } });
    }

    return (
        <div>
            {
            numbers.map( num => (
                <div
                    key={num}
                    onClick={() => { console.log("GO TO NUMBER EXECUTED: "); goToNumber(num); }}
                >
                    {/*<Link href={`/numbers/${num}`} locale={router.locale}>*/}
                        Go To {num}
                    {/*</Link>*/}
                </div>
            ))
            }
            </div>
    )
};

export default Numbers;
