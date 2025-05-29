import React from "react";
import type { Ilabel } from "../../interface/IForms/Ilabel";

const Label: React.FC<Ilabel> = ( {text, className = undefined, htmlFor=undefined} ) => {
    return (
        <label 
            className={className} 
            htmlFor={htmlFor}
        >
            {text}
        </label>
    );
};

export default Label;