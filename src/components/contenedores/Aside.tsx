import React from "react";
import type { IAside } from "../../interface/IContenedores/Iaside";

const Aside: React.FC<IAside> = ( {children, className = undefined} ) => {
    return (
        <aside className={className}>
            {children}
        </aside>
    );
};

export default Aside;