import React, { useState } from "react";

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const toggleFlip = () =>{
        setIsFacingUp(isFacingUp =>!isFacingUp)
    }
    return [isFacingUp, toggleFlip]

}

export default useFlip