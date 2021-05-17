import React from 'react'
import {useRouter} from "next/router";

const Numbers = () => {
    const router = useRouter();

    const numbers = Array(3).fill(1).map(() => (Math.random()*100).toFixed(0));

    const goToNumber = number => {
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
                    Go to number {num}
                </div>
            ))
            }
            </div>
    )
};


export default Numbers;



