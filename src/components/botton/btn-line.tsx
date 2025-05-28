import React from "react";
import type { IBtn } from "../../interface/btn/IBtn";

const BtnLine:React.FC<IBtn> = ( {
    type="button",
    text= null,
    onClick=undefined,
    className="",
    variant="btn-primary",
    disabled=false,
    sizes="btn-sm",
} ) => {

    return (
        <button 
            type={type}
            onClick={onClick}
            className={`btn ${variant} ${sizes} ${className}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default BtnLine;