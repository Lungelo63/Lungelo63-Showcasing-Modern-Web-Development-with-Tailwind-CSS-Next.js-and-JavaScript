import { div } from "framer-motion/client";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";


 //Timeline
 interface TimelineProps {
    children: ReactNode;
 }

 export const Timeline:FC<TimelineProps>=({children})=>{
    return( <div className="flex flex-col gap-y-6">{children}</div>
    )
 };

 //Timeline Item

 interface TimelineItemProps {
    date: string;
    title: string;
    subtitle: string;
    link?: string;
    tag?: string;
    isCourse?: boolean;
 }

 export const TimeLineItem:FC<TimelineItemProps> = ({
    date,
    subtitle,
    title,
    link,
    tag,
    isCourse,
}) => {
    return (
    <div className="flex flex-wrap gap-12 min-h justify-start relative">
        {/*Date timeline*/}
        <div 
            className="h-auto flex-none break-words whitespace-pre"
            style={{ width:`${isCourse ? "0" : ""}`}}
        >
            <p className="text-secondary-foreground"> {date}</p>
        </div>
        {/*Right side*/}
        <div className="frlx gap-x-2"
        style={{ transform: `${isCourse ? " translateX(-45px)" : " "}` }}
        >
            <div className="flex flex-col gap-0.5">
                {/* Title */}
                <div className="text-primary-foreground break-words whitespace-pre"> 
                    <p className="leading-6 font-medium text-sm">{title}</p>
                </div>
                {/* Subtitle*/}
                <div className="flex items-center gap-2 w-min">
                    {
                        link ? <Link href={link} target="_blank">
                                <Body link={link} subtitle={subtitle} tag={tag}/>
                            </Link> : (
                               <Body subtitle={subtitle} tag={tag}/> 
                            )
                    }
                </div>
            </div>
        </div>
    </div>
    );
 }; 

 //Timeline Item Body

 interface BodyProps {
    subtitle: string;
    tag?: string;
    link?: string;
 }

 const Body:FC<BodyProps>=({link, tag, subtitle})=> {
    return ( <div className="text-secondary-forefround flex items-center">
        <p className="text-sm font-normal leading-6 mt-1">{subtitle}</p>
        {
            link ? <FiArrowUpRight /> : null
        }
        {
            tag ? ( <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
                <p className="text-[10px] font-normal text-secondary-foreground">
                    {tag}
                </p>
            </div>
     ) : null
        }
    </div>

    );
 }