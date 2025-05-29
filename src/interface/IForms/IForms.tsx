import type { ReactNode,FormEventHandler } from "react"

interface IForm {
    key?:string | undefined;
    children?:ReactNode;
    onSubmit?:FormEventHandler<HTMLFormElement>;
    className?: string | undefined
};

export type {
    IForm,
}