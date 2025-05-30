import React from "react";
import type { ISection } from "../../interface/IContenedores/Isection";

const Section: React.FC<ISection> = ( {children, className = undefined} ) => {
    return (
        <section className={className}>
            {children}
        </section>
    )
};

export default Section;