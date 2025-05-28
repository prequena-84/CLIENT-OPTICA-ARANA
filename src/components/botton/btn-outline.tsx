import React from "react";
import type { IBtn } from "../../interface/btn/IBtn";

const BtnOutLine:React.FC<IBtn> = ( {
    type="button",
    text= null,
    onClick=undefined,
    className="",
    outLine="btn-outline-primary",
    ariaDisabled=false,
    disabled=false
} ) => {

    return (
        <button 
            type={type}
            onClick={onClick}
            className={`btn ${outLine} ${className}`}
            arial-disabled={ariaDisabled}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default BtnOutLine;