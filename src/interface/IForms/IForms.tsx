import type { ReactNode,FormEventHandler } from "react"

interface IForm {
    children?:ReactNode;
    onSubmit?:FormEventHandler<HTMLFormElement>;
};

export type {
    IForm,
}