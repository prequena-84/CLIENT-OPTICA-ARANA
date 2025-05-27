import React from "react";
import type { IForm } from "../../interface/IForms/IForms";

const Form:React.FC<IForm> = ( {children,onSubmit} ) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Form;