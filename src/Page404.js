import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
export default function Page404() {
    const nav = useNavigate();
    useEffect(() => {
        setTimeout(() => { nav("/") }, 3000);
    }, []);

    return (
        <>
            <center>
                <h1>Page Not Found</h1>
            </center>
        </>
    );
}