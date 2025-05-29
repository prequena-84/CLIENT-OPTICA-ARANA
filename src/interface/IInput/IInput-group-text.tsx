import type { InputHTMLAttributes } from "react"

interface IInputGroupText {
    key?:string | undefined;
    name:string;
    id:string;
    //type?:string;
    className?:string;
    classInput?:string;
    placeHolder?:string;
    arialLabel?:string;
    //arialDescribedby?:string;
    value:string;
    onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
}

export type {
    IInputGroupText,
}