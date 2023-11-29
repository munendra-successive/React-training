import { useEffect } from "react";
const Contact=()=>{
    useEffect(() => {
        throw new Error("Error");
      }, []);
    return(
        <>
            <h4>This is the Contact Page</h4>
        </>
    )
}

export default Contact