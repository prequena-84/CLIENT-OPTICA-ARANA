import type React from "react";
import type { ReactNode } from "react";

interface IDatalogin {
    userName: string;
    password: string;
    token: string;
}

interface ILoginContext {
    dataLogin: IDatalogin;
    setDataLogin: React.Dispatch<React.SetStateAction<IDatalogin>>;
    key?:string | undefined;
    children?: ReactNode;
}

export type {
    IDatalogin,
    ILoginContext,
}