import Link from "next/link";
import {FC, ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    link?: string;
    isIcon?: boolean;
    className?: string;
}

const Button: FC<ButtonProps> = ({ children, className, isIcon, link}) => {
    return <>
    {    
        link ? <Link href={link} target="_blank" className="w-10 h-10 cursor-pointer">

        </Link>
        : <div></div>
    }
    </>;
};

export default Button;

 