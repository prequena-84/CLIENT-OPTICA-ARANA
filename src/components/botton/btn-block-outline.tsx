import React from "react";
import Div from "../contenedores/Div";
import BtnOutLine from "./btn-outline";
import type { IBtn } from "../../interface/Ibtn/IBtn";

const BtnBlockOutLine: React.FC<IBtn> = ( {
    type, 
    className = undefined, 
    variantOutLine = "btn-outline-primary", 
    disabled=false,
    text ="",
    onClick 
}) => {

    return (
        <Div
            className="d-grid gap-2"    
        >
            <BtnOutLine
                type={type}
                text={text}
                variantOutLine={variantOutLine}
                className={className} 
                onClick={onClick}
                disabled={disabled}
            />
        </Div>
    );
};

export default BtnBlockOutLine;