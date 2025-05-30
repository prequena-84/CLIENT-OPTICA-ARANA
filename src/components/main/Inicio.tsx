import React from "react";
import type { Imain } from "../../interface/Imain/IMain";

const Main:React.FC<Imain> = ( {children, className = undefined} ) => {
    return (
        <main 
            className={className}
        >
            {children}
        </main>
    );
};

export default Main;