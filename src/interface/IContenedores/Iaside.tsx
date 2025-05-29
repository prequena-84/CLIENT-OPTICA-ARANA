import type { ReactNode } from "react"

interface IAside {
    key?:string | undefined;
    children?:ReactNode;
    className?: string | undefined
}

export type {
    IAside,
}