import React from "react";
import type { Iform } from "../../interface/IForms/IForms";

const Form:React.FC<Iform> = ( {children, className = undefined, onSubmit} ) => {
    return (
        <form 
            onSubmit={onSubmit}
            className={className}
        >
            {children}
        </form>
    );
};

export default Form;