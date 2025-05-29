import type { ReactNode,FormEventHandler } from "react"

interface IForm {
    children?:ReactNode;
    onSubmit?:FormEventHandler<HTMLFormElement>;
    className?: string | undefined
};

export type {
    IForm,
}