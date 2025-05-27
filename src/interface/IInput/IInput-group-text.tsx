import type { InputHTMLAttributes } from "react"

interface IInputGroupText {
    name:string;
    //type?:string;
    //className?:string;
    placeHolder?:string;
    arialLabel?:string;
    //arialDescribedby?:string;
    value:string;
    onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
}

export type {
    IInputGroupText,
}