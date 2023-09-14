import { useState, useRef } from "react";
import { useNavigate } from "react";

export default function SquareRoot()
{            
       const nav = useNavigate();
       const rNum = useRef();
       const[num, setNum]= useState("");
       const hNum = (event) => {setNum(event.target.value);}
        
       const find =(event) =>{
        event.preventDefault();
          if(num =="")
        {
            alert("Number Is Empty");
            rNum.current.focus();
            return;
        }
        let n = parseFloat(num);
        if (n<0)
        {
            alert("-ve Number Is Not Allowed");
            setNum("");
            rNum.current.focus();
            return;
        }
        let r = n** 0.5;
        r = r.toFixed(2);
        nav("/result",{state:{res :r}})
       }
    return(
        <>
        <center>
            <h1>SquareRoot Finder</h1>
            <form onSubmit={find}>
                <input type="number" step="any" placeholder="Enter Number"/>

                <br></br>
                <input type="submit" value="Find Square Root"/>
                </form>
        </center>
        </>
    );
}