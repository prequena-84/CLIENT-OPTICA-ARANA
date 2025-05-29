import React from "react";
import type { Ifieldset } from "../../interface/IForms/IFieldset";

const Fieldset:React.FC<Ifieldset> = ( {children, className = undefined} ) => {
    return (
        <fieldset 
            className={className}
        >
            {children}
        </fieldset>
    );
};

export default Fieldset;