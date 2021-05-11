import {useRouter} from "next/router";

const NumberComponent = (props) => {
    const router =  useRouter();
    const {name} = props;
    console.log({props});
    const num = router.query.id;
    return (
        <div>
            <h1>{name}</h1>
            <h2>{num}</h2>
        </div>
    )
};

export default NumberComponent;
