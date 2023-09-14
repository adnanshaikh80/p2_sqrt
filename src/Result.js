
import { useLocation, Link} from "react-router-dom"
export default function Result()

{
     const loc = useLocation();
    return(
        <>
        <center>
            <h1>Result</h1>
            <h2>{loc.state != null ? loc.state.res : "You Did Not Enter The Number"}</h2>
            <Link to="/">Home</Link>
        </center>
        </>
    );
}