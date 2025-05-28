import type { MouseEventHandler } from "react";

interface IBtn {
    type?: "button" | "submit" | "reset" | undefined;
    className?:string | null;
    text?:string | null;
    variant?: 'btn-primary' | 'btn-secondary' | 'btn-success' | 'btn-danger' | 'btn-warning' | 'btn-light' | 'btn-dark' | 'btn-link' | null;
    outLine?: 'btn-outline-primary' | 'btn-outline-secondary' | 'btn-outline-success' | 'btn-outline-danger' | 'btn-outline-warning' | 'btn-outline-info' | 'btn-outline-light' | 'btn-outline-dark' | null;
    sizes?: 'btn-lg' | 'btn-sm';
    disabled?: boolean;
    ariaDisabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export type {
    IBtn,
}