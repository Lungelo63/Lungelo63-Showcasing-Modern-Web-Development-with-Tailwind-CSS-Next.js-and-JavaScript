import Link from "next/link";
import {FC, ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    link?: string;
    isIcon?: boolean;
    className?: string;
}

const Button: FC<ButtonProps> ({ children, className, isIcon, link}) => {
    return <>
    {    
        link ? <Link href={link} target="_blank"></Link>
    }
    </>;
};

export default Button;

 