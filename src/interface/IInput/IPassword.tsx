import type { InputHTMLAttributes } from "react"

interface IInputPassword {
    key?:string | undefined;
    name: string;
    id:string
    placeHolder?: string;
    value: string;
    onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
}

export type {
    IInputPassword,
}

