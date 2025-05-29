import React from "react";
import type { IAside } from "../../interface/IContenedores/IAside";

const Aside: React.FC<IAside> = ({
    keyAside = undefined,
    children,
    className = undefined
}) => {
    return (
        <aside 
            key={keyAside}
            className={className}
        >
            {children}
        </aside>
    );
};

export default Aside;