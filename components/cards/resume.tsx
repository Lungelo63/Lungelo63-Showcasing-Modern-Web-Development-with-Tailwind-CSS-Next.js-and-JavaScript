import Card from "../visualEffects/ui/card";
import SignatureImg from "@/public/assets/images/me/signature.png";
import Image from "next/image";
import Button from "../visualEffects/ui/button";
import { FaDownload } from "react-icons/fa";


export default function ResumeCard() {
  return (
    <Card className="md:h-full 2xl:h-fit">
        <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        I began my journey in tech at Hoërskool Hoogenhout, where my interest in problem-solving and the subject IT led
        me to study software engineering. Early on, I found a passion for security and shifted into bug bounty 
        hunting learning to break things before I built them. That mindset carried into my first role at PARCKS,
        where I worked as a full-stack engineer while also auditing smart contracts. From frontend interfaces to 
        backend logic and blockchain systems, I’ve been hands-on across the stack ever since, constantly building, 
        breaking, and refining.
        </p>
        {/*Signature*/}
        <div>
            <Image src={SignatureImg} alt="Lungelo" />
        </div>
        {/*Socials and Resume button*/}
        <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
          {/*Socials*/}  
          <Button>
            <FaDownload />
            Resume
          </Button>
        </div>
    </Card>
  )
}
