import { useEffect } from "react";

export const Form = () =>{
    console.log("Before useEffect");
    useEffect(() => {
        console.log("Inside useEffect");
    });
    console.log("After useEffect");

    return (
        <form>
            <input type="text" />
        </form>
    );
};